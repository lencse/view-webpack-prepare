import Walker from '../walker/Walker'
import Setup from './Setup'

export default class App {

    constructor(
        private walker: Walker
    ) {}

    public run(setup: Setup) {
        this.walker.getFiles(setup.sourceDir)
    }

}
