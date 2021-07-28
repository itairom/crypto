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

    async yesNoTest() {
        try {
            const resp = await axios.get('https://yesno.wtf/api')
            return resp.data
        }
        catch {
            console.log('error');
        }
    }

    async FetchMarketChange() {
        try {
            const resp = await axios.get('https://api.sprintt.co/crypto/currencies/market_change',options)
            return resp.data.market_change_24hr
        }
        catch {
            console.log('error');
        }
    }
    async getCurrenciesList() {
        try {
            const resp = await axios.get('https://api.sprintt.co/crypto/currencies/list',options)
            return resp.data.currencies_list
        }
        catch {
            console.log('error');
        }
    }
}


