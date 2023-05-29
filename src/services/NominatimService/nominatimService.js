import { RestService } from '../RestService/RestService';

export class NominatimService {
    constructor() {
        this._bearerProvider = RestService.getInstance();
    }

    static getInstance() {
        if (!NominatimService.instance) {
            NominatimService.instance = new NominatimService();
        }
        return NominatimService.instance;
    }

    static destroy() {
        NominatimService.instance = null;
    }

    async getPlaceInfos(addressInfos) {
        const queryParams = {
            q: addressInfos,
            format:'json'
        };
        try {
            const response = await this._bearerProvider.get('', queryParams);
            console.log(response.data)
            return response.data;
        } catch (err) {
            throw err;
        }
    }
}
