import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
});

const requestApi = <T>(config: AxiosRequestConfig) =>
    apiClient.request<T>(config).then(({ data }) => data);

export default requestApi;
