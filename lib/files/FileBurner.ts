import DirCreator from '../dirs/DirCreator'
import File from './File'
import write from './write'

export default class FileBurner {

    constructor(
        private dirCreator: DirCreator
    ) {}

    public burn(file: File, content: string): void {
        this.dirCreator.create(file.path)
        write(file, content)
    }

}
