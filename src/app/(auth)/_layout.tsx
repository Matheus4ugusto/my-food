import {Stack} from "expo-router";
import AuthProvider from "../../contexts/AuthContext";
import {ToastProvider} from "react-native-toast-notifications";

export default function LayoutAuth() {
    return (

        <ToastProvider
            successColor="#4db900dd"
            placement="top"
            duration={4000}
        >
            <AuthProvider>
                <Stack screenOptions={{
                    animation: "ios"
                }}>
                    <Stack.Screen name="index" options={{headerShown: false}}/>
                    <Stack.Screen name="register/index" options={{title: "Cadastro"}}/>
                </Stack>
            </AuthProvider>
        </ToastProvider>

    )
}