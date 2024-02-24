import {AuthButton, AuthFormDivider, AuthLink, AuthSubtitle, AuthTitle, FormBox} from "../../../styles/auth.style";
import {Input} from "../../../components/input";
import {Text} from "react-native";
import {useAuth} from "../../../contexts/AuthContext";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerValidation} from "../../../validations/auth.validation";
import {useEffect} from "react";

export default function Register() {

    const {signUp} = useAuth();
    const {register, setValue, handleSubmit} = useForm({resolver: yupResolver(registerValidation)});

    useEffect(() => {
        register("name")
        register("email");
        register("password");
        register("passwordConfirmation")
    }, [register])

    const handleRegister = (value: any) => {
        delete value.passwordConfirmation;
        signUp(value)
    }

    return (
        <FormBox>
            <AuthTitle>Cadastre-se</AuthTitle>
            <AuthSubtitle>Seja bem-vindo</AuthSubtitle>
            <Input label="Nome:" placeholder="digite seu nome..." onChangeText={(text) => setValue("name", text)}/>
            <Input label="Email:" placeholder="digite seu email..." onChangeText={(text) => setValue("email", text)}/>
            <Input label="Senha:" placeholder="digite sua senha..."
                   onChangeText={(text) => setValue("password", text)}/>
            <Input label="Confirma senha:" placeholder="digite sua senha novamente..."
                   onChangeText={(text) => setValue("passwordConfirmation", text)}/>

            <AuthButton onPress={handleSubmit(handleRegister)}>
                <Text style={{textAlign: "center", color: "#fff"}}>Cadastrar</Text>
            </AuthButton>

            <AuthFormDivider/>

            <Text style={{textAlign: "center"}}>
                Já possui uma conta? <AuthLink href="/">Faça login</AuthLink>
            </Text>
        </FormBox>
    )
}