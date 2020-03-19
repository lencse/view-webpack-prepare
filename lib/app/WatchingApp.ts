import App from './App'
import Setup from '../setup/Setup'

export default class CompileApp implements App {

    constructor(
        private app: App
    ) {}

    public run(setup: Setup, params: any): void {
        this.app.run(setup, params)
        // this.dirBurner.run(setup, params)
    }

}
