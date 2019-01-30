import Walker from '../walker/Walker'
import Setup from './Setup'
import FileBurner from '../burn/FileBurner'
import content from '../files/content'

export default class DirBurner {

    constructor(
        private walker: Walker,
        private burner: FileBurner
    ) {}

    public run(setup: Setup, params: any): void {
        const { sourceDir, targetDir, targetExtension, compilers } = setup
        this.walker.getFiles(sourceDir).forEach((file) => {
            this.burner.burn(
                file.transformPath(sourceDir, targetDir).transformExtension(targetExtension),
                compilers.get(file.extension)(content(file), params)
            )
        })
    }

}
