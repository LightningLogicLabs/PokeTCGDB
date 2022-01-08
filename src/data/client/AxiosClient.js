import axios from 'axios'

class AxiosClient {

    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance
    }

    getCatFact() {
        this.axiosInstance.get("/fact").then((response) => {
            console.log(response.data.fact)
        })
    }
}

const axiosInstance = axios.create({
    baseURL: 'https://catfact.ninja',
    timeout: 1000
})

const axiosClient = new AxiosClient(axiosInstance)

export default axiosClient