import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

export const loginAPI = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/admin`,user,"")
}

export const userRegister = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/userreg`,user,"")
}

export const userLogin = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/userlogin`,user,"")
}

export const addHomeCollAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/appointment`,reqBody,"")
}

export const deAppAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/drappointment`,reqBody,"")
}
