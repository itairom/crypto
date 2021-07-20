import axios from "axios";


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
}


