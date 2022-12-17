
import axios from 'axios'

export default async (method, url, params = {}) => {
    const response =  await axios.request({
        method,
        url,
        params
    })
    return response.data    
}