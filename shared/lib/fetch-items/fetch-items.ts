import axios from 'axios';

import { ITEMS_ENDPOINT } from '../../constants';

import { ItemsResponse } from './fetch-items.interface';

export const loadItems = async (): Promise<ItemsResponse> => {
  try {
    const { data } = await axios.get<ItemsResponse>(ITEMS_ENDPOINT);

    return { ...data };
  } catch (error) {
    throw new Error('Something went wrong...');
  }
};
