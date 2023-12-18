import { useState } from "react"
import { navigate } from "../../navigation/NavigationService";
import { Routes } from "../../navigation/Routes";
import useAuthStore from "../../store/authStore";

export const useData = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { login, loading, emailError, setEmailError } = useAuthStore((state) => state);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");
            return false;
        }
        setEmailError(null);
        return true;
    };
    
    const validatePassword = () => {
        if (password.length < 6) {
          setPasswordError("Password must be at least 6 characters");
          return false;
        }
        setPasswordError('');
        return true;
    };

    const goToSignUp = () => {
        navigate(Routes.SIGN_UP);
    }

    const handleLogin = async () => {
        if (!validateEmail() || !validatePassword()) {
            return;
        }

        await login(email, password);

        setEmail('');
        setPassword('');
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        goToSignUp,
        handleLogin,
        emailError,
        passwordError,
        setEmailError,
        setPasswordError,
        validateEmail,
        validatePassword,
        loading
    }
}