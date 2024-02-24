import AuthProvider from "../../contexts/AuthContext";
import {ToastProvider} from "react-native-toast-notifications";
import StoreProvider from "../../contexts/StoreContex";
import Routes from "../../routes";


export default function MainLayout() {
    return (
        <ToastProvider
            successColor="#4db900dd"
            placement="top"
            duration={4000}>
            <AuthProvider>
                <StoreProvider>
                    <Routes/>
                </StoreProvider>
            </AuthProvider>
        </ToastProvider>


    )
}