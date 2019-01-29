import { join } from 'path'
import File from '../src/files/File'
import content from '../src/files/content'

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

})
