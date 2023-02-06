
interface IRequestMethodParams {
    "position-numbers": string[];
    statuses: string;
    id: number;
    jsonrpc: string;
}

export default class RequestMethodParams implements IRequestMethodParams {
    "position-numbers": string[];
    statuses: string;
    id: number;
    jsonrpc: string;
    constructor(_position: string[], _statuses: string, _id: number, _jsonrpc: string) {
        this["position-numbers"] = _position
        this.statuses = _statuses
        this.id = _id
        this.jsonrpc = _jsonrpc
    }
}