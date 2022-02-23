import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import httpMocks from 'node-mocks-http';

import itemsHandler from '.';

const responseData = {
  data: {
    title: 'Some Title',
    description: 'Some Description',
    price: 'Some Price',
    email: 'Some Email',
    image: 'Some Image',
  },
};

jest.mock('axios');

let mockReq: httpMocks.MockRequest<NextApiRequest>;

let mockRes: httpMocks.MockResponse<NextApiResponse<unknown>>;

describe('itemsHandler', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    mockReq = httpMocks.createRequest<NextApiRequest>();
    mockRes = httpMocks.createResponse<NextApiResponse>();

    mockRes.send = jest.fn();
  });

  it('should return data correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(responseData);
    await itemsHandler(mockReq, mockRes);

    expect(axios.get).toHaveBeenCalledWith(
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json',
    );
    expect(mockRes.statusCode).toBe(200);
    expect(mockRes._getJSONData()).toEqual(responseData.data);
  });

  it('should throw an error', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce('Some Error');
    await itemsHandler(mockReq, mockRes);

    expect(axios.get).toHaveBeenCalledWith(
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json',
    );
    expect(mockRes.statusCode).toBe(500);
    expect(mockRes._getJSONData()).toEqual({
      error: 'Something went wrong...',
    });
  });
});
