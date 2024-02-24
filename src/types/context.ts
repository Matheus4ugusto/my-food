export interface LoginRequest {
    email: string;
    password: string
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface AuthContextProps {
    signIn: (value: LoginRequest) => void;
    signUp: (value: RegisterRequest) => void
    logout: () => void
}