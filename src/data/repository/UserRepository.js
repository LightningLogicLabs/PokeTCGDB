class UserRepository {

    constructor (axiosClient) {
        this.axiosClient = axiosClient
    }

    getUser() {
        return {
            id: "GN8239-nVsn848-1289nQu",
            userName: "sir_ramen"
        }
    }
}

const userRepository = new UserRepository()

export default userRepository