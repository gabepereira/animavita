import { AxiosResponse, AxiosError } from 'axios';
import api from 'services/api';
import { HTTPResponseTrending } from './types';

class APIService {
  getCategoryBySlug(slug: string): Promise<AxiosResponse> {
    const query = `/categories?filter[slug]=${slug}`;

    return new Promise((resolve, reject) => {
      api
        .get(query)
        .then((response) => resolve(response.data.data[0].id))
        .catch((error: AxiosError) => reject(error));
    });
  }

  getTrending(): Promise<AxiosResponse<HTTPResponseTrending>> {
    const query = `/trending/anime?limit=21`;

    return new Promise((resolve, reject) => {
      api
        .get(query)
        .then((response) => resolve(response))
        .catch((error: AxiosError) => reject(error));
    });
  }

  getEpisodes(animeId: string, limit = 10, offset = 0): Promise<AxiosResponse> {
    const query = `/anime/${animeId}/episodes?page[limit]=${limit}&page[offset]=${offset}`;

    return new Promise((resolve, reject) => {
      api
        .get(query)
        .then((response) => resolve(response.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  getGenres(animeId: string): Promise<AxiosResponse> {
    const query = `/anime/${animeId}/genres`;

    return new Promise((resolve, reject) => {
      api
        .get(query)
        .then((response) => resolve(response.data.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  getCategories(animeId: string): Promise<AxiosResponse> {
    const query = `/anime/${animeId}/categories`;

    return new Promise((resolve, reject) => {
      api
        .get(query)
        .then((response) => resolve(response.data.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  search(text: string, limit = 10, offset = 0): Promise<AxiosResponse> {
    const query = `/anime?filter[text]=${text}&page[limit]=${limit}&page[offset]=${offset}`;

    return new Promise((resolve, reject) => {
      api
        .get(query)
        .then((response) => resolve(response.data.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}

export default APIService;
