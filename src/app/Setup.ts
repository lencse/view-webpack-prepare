import Compilers from '../compiler/Compilers'

export default class Setup {

    private _sourceDir: string

    private _targetDir: string

    private _targetExtension: string

    private _compilers: Compilers

    constructor(
        sourceDir: string,
        targetDir: string,
        targetExtension: string,
        compilers: Compilers
    ) {
        this._sourceDir = sourceDir
        this._targetDir = targetDir
        this._targetExtension = targetExtension
        this._compilers = compilers
    }

    public get sourceDir(): string {
        return this._sourceDir
    }

    public get targetDir(): string {
        return this._targetDir
    }

    public get targetExtension(): string {
        return this._targetExtension
    }

    public get compilers(): Compilers {
        return this._compilers
    }

}
