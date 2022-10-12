import axios from "axios";



const api_cep = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api_cep;
