import { tmpdir } from 'os'
import { join } from 'path'
import DirBurner from '../src/app/DirBurner'
import NpmWalkWalker from '../src/walker/NpmWalkWalker'
import Setup from '../src/app/Setup'
import Compilers from '../src/compiler/Compilers'
import FileBurner from '../src/files/FileBurner'
import MkdirpDirCreator from '../src/dirs/MkdirpDirCreator'
import content from '../src/files/content'
import File from '../src/files/File'

describe('App', () => {

    it('Burn dir', () => {
        const app = new DirBurner(
            new NpmWalkWalker(),
            new FileBurner(
                new MkdirpDirCreator()
            )
        )
        const targetDir = join(tmpdir(), String(Date.now()))
        const compilers = new Compilers()
        compilers.add('txt', (fileContent: string) => fileContent.toLowerCase())
        const setup = new Setup(
            join(process.cwd(), 'test/fixtures/html-and-txt'),
            targetDir,
            'ejs',
            compilers
        )
        app.run(setup, {})
        expect(content(new File(targetDir, 'index.ejs'))).toEqual('<html></html>')
        expect(content(new File(join(targetDir, 'subdir'), 'test.ejs'))).toEqual('test')
    })

})
