import LocalListAttr from "./LocalListAttr"

export default class LocalListAttrVals {
    public attrVals: LocalListAttr
    public value: string

    constructor(
        attrVals: LocalListAttr,
        value: string
    ) {
        this.attrVals = attrVals
        this.value = value
    }
}