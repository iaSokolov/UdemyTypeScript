export default class CommonParam {
    constructor(public start: string, public end: string) {

    }
}

export class StartMessage {
    constructor(public _message: string) {

    }

    public get message() : string {
        return `start message: ${this._message}` 
    }
}

export class EndMessage {
    constructor(public _message: string) {

    }

    public get message() : string {
        return `end message: ${this._message}` 
    }
}

