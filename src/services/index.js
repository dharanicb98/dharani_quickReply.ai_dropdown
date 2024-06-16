import axios from "axios"

const baseUrl = process.env.baseUrl || "https://fakestoreapi.com"

const getProdutData = () => {
    const response = axios.get(`${baseUrl}/products`)
    return response
}

export {getProdutData}