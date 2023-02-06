import Success from "./Success"
import Error from "./Error"

export default interface IResponse {
    result?: Success[],
    error?: Error[],
    jsonrpc: String,
    id: number
}