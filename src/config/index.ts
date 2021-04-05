import * as env from 'dotenv';

env.config();

export const ADDRESS = process.env.ADDRESS;
export const PROVIDER = process.env.PROVIDER;
export const CACHE_TTL = parseInt(process.env.CACHE_TTL);
