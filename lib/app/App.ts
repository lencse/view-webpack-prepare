import Setup from '../setup/Setup'

export default interface App {

    run(setup: Setup, params: any): void

}
