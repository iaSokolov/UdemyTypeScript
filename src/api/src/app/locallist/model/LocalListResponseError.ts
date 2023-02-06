import ILocalListResponse from "./ILocalListResponse";

export default class LocalListResponseError implements ILocalListResponse {
    public success: boolean = false

    constructor(
        public traceId: string,
        public message: string
    ) { }
}