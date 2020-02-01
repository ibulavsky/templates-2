import axios from 'axios';
import {baseURL} from "../../../base-url";
import {passwordCoding} from "../../../7-helpers/passwordCoding";

const instance = axios.create({
    baseURL
});

export const RegisterAPI = {
    getSuccessRegister(email: string, password: string) {
        return instance.post(`auth/register`, {email, password})
    },
};
