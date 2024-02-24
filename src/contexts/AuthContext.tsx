import React, {createContext, useContext, useEffect} from "react";
import {AuthContextProps, LoginRequest, RegisterRequest} from "../types/context";
import {login, register} from "../services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {api} from "../services/api";
import {useToast} from "react-native-toast-notifications";
import {router} from "expo-router";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const toast = useToast();

    useEffect(() => {
        AsyncStorage.getItem("@token").then(res => {
            if (res) {
                router.push("/main");
                return
            }

            router.push("/")
        })
    }, [])

    const signIn = async (value: LoginRequest) => {

        try {
            const response = await login(value);
            await AsyncStorage.setItem("@token", response.accessToken);
            api.defaults.headers.authorization = `Bearer ${response.accessToken}`;
            toast.show("Login concluído!", {
                successColor: "#4db900dd",
                type: "success",
                placement: "top",
                duration: 4000
            });
            router.push("/main")
        } catch (error) {
            console.error(error)
        }

    }

    const logout = async () => {
        await AsyncStorage.removeItem("@token")
        router.push("/")
    }

    const signUp = async (value: RegisterRequest) => {

        try {
            const response = await register(value);
            await AsyncStorage.setItem("@token", response.accessToken);
            api.defaults.headers.authorization = `Bearer ${response.accessToken}`;
            toast.show("Login concluído!", {
                successColor: "#4db900dd",
                type: "success",
                placement: "top",
                duration: 4000
            });
            router.push("/main")
        } catch (error) {
            console.error(error)
        }

    }


    return (
        <AuthContext.Provider value={{signIn, signUp, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);