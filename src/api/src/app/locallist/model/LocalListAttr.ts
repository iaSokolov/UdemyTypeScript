export default class LocalListAttr {
    public id: number;
    public name: string
    public dictId: number
    public primary: boolean
    public code: string

    constructor(
        id: number,
        name: string,
        dictId: number,
        primary: boolean,
        code: string
    ) {
        this.id = id
        this.name = name
        this.dictId = dictId
        this.primary = primary
        this.code = code
    }
}