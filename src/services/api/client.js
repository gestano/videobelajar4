import axios from "axios";
const client = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
timeout: 15000,
});

client.interceptors.request.use(
(config) => {
const token = localStorage.getItem("token");
if (token) config.headers.Authorization = `Bearer ${token}`;
config.headers["X-Requested-With"] = "XMLHttpRequest";
return config;
},
(error) => Promise.reject(error)
);

client.interceptors.response.use(
(res) => res,
(error) => {
const message =
error.response?.data?.message || error.message || "Unknown error";
console.error("[API ERROR]", message, error.response);
return Promise.reject(error);
}
);

export default client;