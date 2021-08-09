import { AxiosResponse, AxiosError } from 'axios';
import api from 'services/api';
import { HTTPResponseManga } from './types';

interface SearchParams {
  limit: number;
  offset?: number;
  text?: string;
}

export const searchManga = ({
  limit = 10,
  offset,
  text,
}: SearchParams): Promise<AxiosResponse<HTTPResponseManga>> => {
  const query = `/manga?page[limit]=${limit}
  ${offset ? `&page[offset]=${offset}` : ''}
  ${text ? `&filter[text]=${text}` : ''}`;

  return new Promise((resolve, reject) => {
    api
      .get(query)
      .then((response) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};
