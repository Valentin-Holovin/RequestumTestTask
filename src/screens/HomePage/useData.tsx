import { useEffect, useState } from "react"
import useAuthStore from "../../store/authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useData = () => {
    const [email, setEmail] = useState('');
    const { logout, fetchUser, user, loading } = useAuthStore(state => state);
    const userId = user?.id;

    console.log({ email })

    const fethUser = async () => {
        if (userId !== undefined) {
            await fetchUser(userId);
        } else {
            console.log("User ID is undefined");
        }
    };

    useEffect(() => {
        fethUser();
    }, []);

    useEffect(() => {
        const checkUserEmail = async () => {
          const userDataString = await AsyncStorage.getItem('userData');
          const userData = userDataString ? JSON.parse(userDataString) : null;

          const userEmailString = await AsyncStorage.getItem('email');
          const userEmail = userEmailString ? JSON.parse(userEmailString) : null;
      
          setEmail(userData?.email || userEmail);
        };
      
        checkUserEmail();
    }, []);

    const handleLogOut = () => {
        logout();
    };

    return {
        handleLogOut,
        loading,
        email,
        user,
    }
}