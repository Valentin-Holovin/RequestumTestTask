import { useState } from "react"
import { navigate } from "../../navigation/NavigationService";
import { Routes } from "../../navigation/Routes";
import { useAuthStore } from '../../store/authStore';

export const useData = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const { register, loading } = useAuthStore(state => state);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError("Invalid email address");
          return false;
        }
        setEmailError("");
        return true;
    };
    
    const validatePassword = () => {
        if (password.length < 6) {
          setPasswordError("Password must be at least 6 characters");
          return false;
        }
        setPasswordError("");
        return true;
    };

    const handleSignUp = async () => {
        if (!validateEmail() || !validatePassword()) {
            return;
        }

        await register(email, password)

        setEmail("");
        setPassword("");
    };

    const goToLogin = () => {
        navigate(Routes.LOGIN);
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        goToLogin,
        handleSignUp,
        loading,
        emailError,
        passwordError,
        validateEmail,
        validatePassword,
        setEmailError,
        setPasswordError
    }
}