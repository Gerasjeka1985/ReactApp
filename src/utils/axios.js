import axios from 'axios'


const instance = axios.create({
    baseURL: "http://localhost:9200/api",
})

//расширяем запрос, что бы в кажлом запросе проверять токен если есть

instance.interceptors.request.use(config => {
    //к любому запросу будем добавлять header  с нашим токеном
    config.headers.authorization = window.localStorage.getItem('token')

    return config
})

export default instance