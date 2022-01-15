import sampleCardData from '../sample-data/SampleCardData.js'
class SearchRepository {

    constructor(axiosClient) {
        this.axiosClient = axiosClient
    }

    async getCardDetailById(id) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
        return sampleCardData.find((card) => {
            return card.id == id
        })
    }

    search() {
        return sampleCardData
    }
}

const searchRepository = new SearchRepository()

export default searchRepository