import { loadItems } from '../index';

import axios from 'axios';

const responseData = {
  data: {
    items: [
      {
        title: 'Some Title',
        description: 'Some Description',
        price: 'Some Price',
        email: 'Some Email',
        image: 'Some Image',
      },
    ],
  },
};

jest.mock('axios');

describe('itemsHandler', () => {
  beforeEach(jest.clearAllMocks);

  it('should return data correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(responseData);
    const result = await loadItems();

    expect(axios.get).toHaveBeenCalledWith(
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json',
    );
    expect(result).toEqual(responseData.data);
  });

  it('should throw an error', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce('Some Error');

    try {
      await loadItems();
    } catch (error) {
      expect(axios.get).toHaveBeenCalledWith(
        'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json',
      );

      expect((error as Error).message).toEqual('Something went wrong...');
    }
  });
});
