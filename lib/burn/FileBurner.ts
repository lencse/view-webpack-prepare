import DirCreator from '../dirs/DirCreator'
import File from '../files/File'
import write from '../files/write'

export default class FileBurner {

    constructor(
        private dirCreator: DirCreator
    ) {}

    public burn(file: File, content: string): void {
        this.dirCreator.create(file.path)
        write(file, content)
    }

}
