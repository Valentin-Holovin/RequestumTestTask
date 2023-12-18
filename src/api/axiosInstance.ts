import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
});

export default axiosInstance;