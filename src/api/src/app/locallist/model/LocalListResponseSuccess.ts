import ILocalListResponse from "./ILocalListResponse";
import LocalListResponceData from "./LocalListResponceData";

export default class LocalListResponseSuccess implements ILocalListResponse {
    public success: boolean = true

    constructor(public data: LocalListResponceData) { }
}