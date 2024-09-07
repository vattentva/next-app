import { UserInfo } from "@/domain/models/Sample";
import { API_ENDPOINTS, APP_BASE_URL } from "@/shared/constants/appConstants";

export const fetchSampleData = async (): Promise<UserInfo> => {
    const HOST = process.env.APP_BASE_URL || APP_BASE_URL;
    const PATH = API_ENDPOINTS.SAMPLE;
    const response = await fetch(HOST + PATH + '?foo=bar&hoge=123');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return await response.json();
}
