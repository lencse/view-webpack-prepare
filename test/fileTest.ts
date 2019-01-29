import { tmpdir } from 'os'
import { join } from 'path'
import File from '../src/files/File'
import content from '../src/files/content'
import write from '../src/files/write'
import FileBurner from '../src/files/FileBurner'
import MkdirpDirCreator from '../src/dirs/MkdirpDirCreator'

describe('Files', () => {

    it('Transform path', () => {
        const file = new File('/path/to/src/dir/subdir/', 'file')
        expect(file.transformPath('/path/to/src', 'path/to/target')).toEqual(
            new File('path/to/target/dir/subdir', 'file')
        )
    })

    it('Extension', () => {
        const file = new File('/', 'file.txt')
        expect(file.extension).toEqual('txt')
    })

    it('Transform extension', () => {
        const file = new File('/', 'file.txt')
        expect(file.transformExtension('html')).toEqual(new File('/', 'file.html'))
    })

    it('File content', () => {
        const file = new File(join(process.cwd(), 'test', 'fixtures', 'one-html-file'), 'index.html')
        expect(content(file)).toEqual('<html></html>')
    })

    it('Write file', () => {
        const file = new File(tmpdir(), String(Date.now()))
        write(file, 'TEST')
        expect(content(file)).toEqual('TEST')
    })

    it('Burn file', () => {
        const file = new File(join(tmpdir(), String(Date.now())), 'test.txt')
        const burner = new FileBurner(new MkdirpDirCreator())
        burner.burn(file, 'TEST')
        expect(content(file)).toEqual('TEST')
    })

})
