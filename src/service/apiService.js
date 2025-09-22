import axios from "../utils/axiosCustomize"

const postCreateNewUser = (email, password, name, role, image) => {

    const data = new FormData();
    data.append("email", email)
    data.append("password", password)
    data.append("username", name)
    data.append("role", role)
    data.append("userImage", image)

    return axios.post("api/v1/participant", data)
}

const getAllUsers = () => {
    return axios.get("http://localhost:8081/api/v1/participant/all")
}

export { postCreateNewUser, getAllUsers }