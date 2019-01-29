export default class Compiler {

    private _extension: string

    private _compile: (content: string) => string

    constructor(
        extension: string,
        compile: (content: string) => string
    ) {
        this._extension = extension
        this._compile = compile
    }

    public get extension(): string {
        return this._extension
    }

    public get compile(): (content: string) => string {
        return this._compile
    }

}
