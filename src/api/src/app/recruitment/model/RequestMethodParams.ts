export default class RequestMethodParams {
    constructor(        
        public position_numbers: string[],
        public statuses: string,
        public id: number,
        jsonrpc: string
    ) { }
}