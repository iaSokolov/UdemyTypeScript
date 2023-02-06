import LocalListMeta from "./LocalListMeta";

export default class LocalListData {
    public meta: LocalListMeta

    constructor(
        meta: LocalListMeta,
    ) {
        this.meta = meta;
    }
}