
import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    handleSuccess(response) {
        return response;
    }


    handleError = (error) => {
        switch (error.response.status) {
            case 401:
                this.redirectTo(document, '/')
                break;
            case 404:
                this.redirectTo(document, '/404')
                break;
            default:
                this.redirectTo(document, '/500')
                break;
        }
        return Promise.reject(error)
    }

    redirectTo = (document, path) => {
        document.location = path
    }


    async get(url, params) {
        const response = await this.instance.get(url, params);
        return (response.status, response.data);
    }

    async post(url, body, config) {
        const response = await this.instance.post(url, body, config);
        return (response.status, response.data);
    }

    // put(url, body) {
    //     return this.instance.put(url, body);
    // }

    // delete(url) {
    //     return this.instance.delete(url);
    // }
}

export default new AxiosService();