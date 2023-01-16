interface ILog {
    print(message: string): void
}


export class Log implements ILog {
    constructor() {

    }

    print(message: string): void {
        console.log(message)
    }
}