import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
});

const requestApi = (config: AxiosRequestConfig) =>
    apiClient.request(config).then(({ data }) => data);

export default requestApi;
