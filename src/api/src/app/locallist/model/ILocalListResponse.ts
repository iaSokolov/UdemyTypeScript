import LocalListResponceData from "./LocalListResponceData";

export default interface ILocalListResponse {
    data?: LocalListResponceData
    message?: string
    traceId?: string
    success: boolean    
}