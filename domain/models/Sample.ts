export interface UserInfo {
    request: {
        origin: string,
        pathname: string,
        search: string,
    },
    method: string,
    userAgent: string,
    currentTime: string,
}
