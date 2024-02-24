import {LoginRequest, RegisterRequest} from "../types/context";
import {api} from "./api";

export const login = async (data: LoginRequest) => {
    return (await api.post("/login", data)).data;
};

export const register = async (data: RegisterRequest) => {
    return (await api.post("/register", data)).data
}