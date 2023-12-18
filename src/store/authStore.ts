import { create } from 'zustand';
import axiosInstance from '../api/axiosInstance';
import { Routes } from '../navigation/Routes';
import { navigate } from '../navigation/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface AuthStore {
  user: User | null;
  userData?: User[] | null;
  loading: boolean;
  emailError: string | null;
  setEmailError: (error: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUser: (id: number) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,
  emailError: null,
  setEmailError: (error) => set({ emailError: error }),
  login: async (email, password) => {
    try {
      set({ loading: true });

      const response = await axiosInstance.get<User>('/users');
      const userData = response?.data;
      const existingUser = Array.isArray(userData) && userData.find((user: User) => user.email === email);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      if (existingUser) {
        set({ user: existingUser, userData });
        navigate(Routes.HOME);
      } else {
        set({ user: null });
        set({ emailError: "Email not found" });
      }
    } catch (error) {
      console.log('Login failed:', error);
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },
  register: async (email, password) => {
    try {
      set({ loading: true });

      const response = await axiosInstance.post('/users', { email, password });
      const userData = response?.data;
      await AsyncStorage.setItem('email', JSON.stringify(email));

      if (response?.status === 201 || 200) {
        set({ user: userData });
        navigate(Routes.HOME);
      } else {
        set({ user: null });
      }
    } catch (error) {
      console.log('Registration failed:', error);
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },
  fetchUser: async (id: number) => {
    try {
      set({ loading: true });

      const response = await axiosInstance.get<User>(`/users/${id}`);
      const userData = response?.data;

      set({ user: userData });
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.log('fetch user failed:', error);
    } finally {
      set({ loading: false });
    }
  },
  logout: async () => {
    set({ user: null });
    navigate(Routes.SPLASH);
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('email');
  },
}));

export default useAuthStore;
