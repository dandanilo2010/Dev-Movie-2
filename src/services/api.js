import axios from 'axios'

const api = axios.create({

    baseUrl: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'f7fea45daf498a55197ac9281223a061',
        language: 'pt-br',
        page: 1
    }
})

export default api