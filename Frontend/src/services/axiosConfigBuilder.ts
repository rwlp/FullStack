import { AxiosRequestConfig } from 'axios';
import { BASE_URL_API } from "../common/constants";

export class AxiosConfigBuilder {
    private config: AxiosRequestConfig;

    constructor(urlEndpoint: string) {
        this.config = {
            baseURL: BASE_URL_API,
            url: urlEndpoint,
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }
    }

    setAuthToken(token: string): AxiosConfigBuilder {
        this.config.headers = {
            ...this.config.headers,
            'Authorization': `Bearer ${token}`,
        };

        return this;
    }

    setMethod(method: 'POST' | 'GET') {
        this.config.method = method;
        return this;
    }
    
    setBody(data: unknown, dataType: string) {
        this.config.data = {
            data: data,
            dataType: dataType,
        }
    }

    setParams(params: URLSearchParams) {
      this.config.params = params;

      return this
    }

    build(): AxiosRequestConfig {
        console.log('finish build');
        return this.config;
    }
}