import { join } from 'path'

export default class File {

    private _name: string

    private _path: string

    constructor(path: string, name: string) {
        this._name = name
        this._path = path
    }

    public get path(): string {
        return this._path
    }
    public get name(): string {
        return this._name
    }

    public get fullPath(): string {
        return join(this.path, this.name)
    }

}
