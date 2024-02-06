import {AuthButton, AuthFormDivider, AuthSubtitle, AuthTitle, FormBox} from "../../styles/auth.style";
import {Input} from "../../components/input";
import {Text} from "react-native";

export default function Login() {
    return (
        <FormBox>
            <AuthTitle>Login</AuthTitle>
            <AuthSubtitle>Seja bem-vindo de volta</AuthSubtitle>
            <Input label="Email" placeholder="digite seu email..."/>
            <Input label="Senha:" placeholder="digite sua senha..."/>
            <AuthFormDivider/>
            <AuthButton><Text style={{textAlign: "center", color: "#fff"}}>Entrar</Text></AuthButton>
        </FormBox>)
}