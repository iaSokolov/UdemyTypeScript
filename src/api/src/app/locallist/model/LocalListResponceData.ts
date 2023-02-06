import LocalListEntry from "./LocalListEntry";
import LocalListMeta from "./LocalListMeta";

export default class LocalListResponceData {
    public meta: LocalListMeta
    public data: LocalListEntry[]
    constructor(
        meta: LocalListMeta,
        data: LocalListEntry[],
    ) {
        this.data = data;
        this.meta = meta;
    }
}