import { navigate } from "../../navigation/NavigationService"
import { Routes } from "../../navigation/Routes"

export const useData = () => {
    const goToLogin = () => {
        navigate(Routes.LOGIN);
    }

    const goToSignUp = () => {
        navigate(Routes.SIGN_UP)
    }

    return {
        goToLogin,
        goToSignUp
    }
}