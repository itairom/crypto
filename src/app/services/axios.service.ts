import axios from "axios";

const TOKEN = '1e6be782-0600-4b32-9674-5a4488ae6cd4';

const options = {
    headers: {
        'user-access-token': `${TOKEN}`,
        'Access-Control-Allow-Origin': "*"
    }
};

export class AxiosService {
    constructor() { }

    async FetchMarketChange() {
        try {
            const resp = await axios.get('https://api.sprintt.co/crypto/currencies/market_change', options)
            return resp.data.market_change_24hr
        }
        catch {
            console.log('error');
        }
    }
    async FetchHistory(currencyId, time) {
        try {
            let status = '1M'
            if (time === 'year') {
                status = "1Y"
            }
            else if (time === 'day') {
                status = "1D"
            }
            const resp = await axios.get(`https://api.sprintt.co/crypto/currencies/history/${currencyId}?time_scope=${status}`, options)
            return resp.data.quotes_data
        }
        catch {
            console.log('error');
        }
    }
    async setIsTracked(status, id) {
        try {
            let bool = status ? true : false
            const resp = axios.post(`https://api.sprintt.co/crypto/currencies/tracked_currencies/${id}?status=${bool}`, {}, options)
        }
        catch {
            console.log('error');
        }
    }
    async getCurrenciesList() {
        try {
            const resp = await axios.get('https://api.sprintt.co/crypto/currencies/list', options)
            return resp.data.currencies_list
        }
        catch {
            console.log('error');
        }
    }
    async getTruckedCurrenciesList() {
        
        try {
            const resp = await axios.get('https://api.sprintt.co/crypto/currencies/list?tracked_only=true&limit=100&offset=0', options)
            return resp.data.currencies_list
        }
        catch {
            console.log('error');
        }
    }
}


