import { tmpdir } from 'os'
import { join } from 'path'
import App from '../src/app/App'
import NpmWalkWalker from '../src/walker/NpmWalkWalker'
import Setup from '../src/app/Setup'
import Compilers from '../src/compiler/Compilers'

describe('App', () => {

    it('Run app', () => {
        const app = new App(new NpmWalkWalker())
        const targetDir = join(tmpdir(), String(Date.now()))
        const compilers = new Compilers()
        const setup = new Setup(
            join(process.cwd(), 'test/fixtures/html-and-txt'),
            targetDir,
            'ejs',
            compilers
        )
        app.run(setup)
    })

})
