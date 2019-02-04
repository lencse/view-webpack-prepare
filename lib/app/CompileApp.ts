import App from './App'
import Setup from '../setup/Setup'
import DirBurner from '../burn/DirBurner'

export default class CompileApp implements App {

    constructor(
        private dirBurner: DirBurner
    ) {}

    public run(setup: Setup, params: any): void {
        this.dirBurner.run(setup, params)
    }

}
