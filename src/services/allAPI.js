import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

export const loginAPI = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}