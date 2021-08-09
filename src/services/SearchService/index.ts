import { AxiosResponse, AxiosError } from 'axios';
import api from 'services/api';
import { HTTPResponseTrending } from './types';

export const getTrending = (): Promise<AxiosResponse<HTTPResponseTrending>> => {
  const query = `/trending/anime?limit=21`;

  return new Promise((resolve, reject) => {
    api
      .get(query)
      .then((response) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};

export const searchAnimes = (
  text: string,
  limit = 10,
  offset = 0
): Promise<AxiosResponse<HTTPResponseTrending>> => {
  const query = `/anime?filter[text]=${text}&page[limit]=${limit}&page[offset]=${offset}`;

  return new Promise((resolve, reject) => {
    api
      .get(query)
      .then((response) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};
