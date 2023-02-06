import IResponse from "./IResponse";
import Error from "./Error";

export default class ResponseError implements IResponse {
    constructor(
        public error: Error[],
        public jsonrpc: String,
        public id: number
    ) { }
}