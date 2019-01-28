export default class Params {

    private _srcDir: string

    constructor(
        srcDir: string
    ) {
        this._srcDir = srcDir
    }

    public get srcDir(): string {
        return this._srcDir
    }

}
