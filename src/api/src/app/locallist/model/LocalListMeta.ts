
export default class LocalListMeta {
    public size: number
    public number: number
    public hasNext: boolean
    public pages: number
    public totalElements: number

    constructor(
        size: number,
        number: number,
        hasNext: boolean,
        pages: number,
        totalElements: number
    ) {
        this.size = size;
        this.number = number;
        this.hasNext = hasNext;
        this.pages = pages;
        this.totalElements = totalElements;
    }
}
