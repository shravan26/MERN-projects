import axios from 'axios';

const BASE_URL = 'http://localhost:5555/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTFjMTEzZTk2MTdmOTUzYzI0N2FmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjcwNTU5MCwiZXhwIjoxNjQyOTY0NzkwfQ.GWEFrym4pfaouaIAvHSvnBqByxjdfuBHUmRtn6-Xngc';

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token:`Bearer ${TOKEN}`}
});
