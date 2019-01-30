import { tmpdir } from 'os'
import { join } from 'path'
import DirBurner from '../lib/app/DirBurner'
import NpmWalkWalker from '../lib/walker/NpmWalkWalker'
import Setup from '../lib/app/Setup'
import Compilers from '../lib/compiler/Compilers'
import FileBurner from '../lib/burn/FileBurner'
import MkdirpDirCreator from '../lib/dirs/MkdirpDirCreator'
import content from '../lib/files/content'
import File from '../lib/files/File'

describe('Dirn burner', () => {

    it('Burn dir', () => {
        const burner = new DirBurner(
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
        burner.run(setup, {})
        expect(content(new File(targetDir, 'index.ejs'))).toEqual('<html></html>')
        expect(content(new File(join(targetDir, 'subdir'), 'test.ejs'))).toEqual('test')
    })

})
