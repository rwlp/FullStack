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

    setMethod(method: 'POST' | 'GET') {
        this.config.method = method;
        return this;
    }
    
    setBody(data: unknown, dataType: string) {
        this.config.data = {
            data: data,
            dataType: dataType,
        }

        return this;
    }

    setParams(params: URLSearchParams) {
      this.config.params = params;

      return this
    }

    build(): AxiosRequestConfig {
        return this.config;
    }
}