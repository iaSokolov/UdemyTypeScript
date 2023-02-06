
import IResponse from "./IResponse";
import Success from "./Success";

export default class ResponseSuccess implements IResponse {
    constructor(
        public result: Success[],
        public jsonrpc: String,
        public id: number
    ) { }
}