import axios from "axios";

export class RestService {
    constructor() {
        this.instance = axios.create({ baseURL: 'https://nominatim.openstreetmap.org/search' });
        this.instance.defaults.timeout = 90 * 1000; // 90 secs default timeout
    }

    static getInstance() {
        if (!RestService.restBearerClient) {
            RestService.restBearerClient = new RestService();
        }
        return RestService.restBearerClient;
    }

    static destroy() {
        RestService.restBearerClient = null;
    }

    async get(url, params) {
        try {
            const response = await this.instance.get(url, { params });
            return response;
        } catch (error) {
            throw error;
        }
    }
}
