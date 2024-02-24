import {api} from "./api";

export const getStores = async () => {
    return (await api.get("/stores")).data;
}

export const getProducts = async () => {
    return (await api.get("/products")).data;
}

export const getProductById = async (id: number) => {
    return (await api.get(`/products/${id}`)).data;
}

export const getProductsByStoreId = async (id: number) => {
    return (await api.get(`/stores/${id}/products`)).data
}

export const getStoreById = async (id: number) => {
    return (await api.get(`/stores/${id}`)).data
}