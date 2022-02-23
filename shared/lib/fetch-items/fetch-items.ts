import axios from 'axios';

import { ITEMS_ENDPOINT } from '../../constants';

import { IItemsResponse } from './fetch-items.interface';

export const loadItems = async (): Promise<IItemsResponse> => {
  try {
    const { data } = await axios.get<IItemsResponse>(ITEMS_ENDPOINT);

    return { ...data };
  } catch (error) {
    throw new Error('Something went wrong...');
  }
};
