class UserRepository {

    constructor (axiosClient) {
        this.axiosClient = axiosClient
    }

    getUser() {
        return {
            id: "82cb8883-2482-4ede-af09-5226368bbe39",
            userName: "sir_ramen",
            profileImage: "https://www.w3schools.com/howto/img_avatar.png"
        }
    }
}

const userRepository = new UserRepository()

export default userRepository