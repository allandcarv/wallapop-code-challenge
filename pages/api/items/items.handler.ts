import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { ITEMS_ENDPOINT } from '../../../shared/constants';

import { Items } from './items.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Items[] | unknown>,
) {
  try {
    const { data } = await axios.get<Items[]>(ITEMS_ENDPOINT);

    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
