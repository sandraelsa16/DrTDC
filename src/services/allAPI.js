import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

export const loginAPI = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/admin`,user,"")
}

export const addHomeCollAPI = async(reqBody)=>{
     return await commonAPI("POST",`${SERVER_URL}/appointment`,reqBody,"")
}

export const userRegister = async (reqBody) => {
    return await commonAPI("POST",`${SERVER_URL}/userreg`,reqBody,"")
}