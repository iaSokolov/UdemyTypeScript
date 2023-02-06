import LocalListAttrVals from "./LocalListAttrVals";

export default class LocalListEntry {
    public entryId: number;
    public attrVals: LocalListAttrVals[];

    constructor(
        entryId: number,
        attrVals: LocalListAttrVals[]
    ) {
        this.entryId = entryId;
        this.attrVals = attrVals;
    }
}