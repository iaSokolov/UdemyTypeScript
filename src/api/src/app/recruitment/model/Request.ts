import RequestMethodParams from "./RequestMethodParams"

export default class Request { 
    constructor(
        public method: string, 
        public params: RequestMethodParams
    ) { }  
}