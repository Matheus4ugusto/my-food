import * as yup from "yup";

export const loginValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export const registerValidation = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
        .string()
        .email()
        .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, "Formato de email incorreto!"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .matches(
            /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/,
            "A senha precisa conter pelo menos um número, uma letra maiúscula e uma minúscula"
        ),
    passwordConfirmation: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "As senhas devem coincidir"),
});