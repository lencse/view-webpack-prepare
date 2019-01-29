import File from '../src/files/File'

describe('Files', () => {

    it('Transform path', () => {
        const file = new File('/path/to/src/dir/subdir/', 'file')
        expect(file.transformPath('/path/to/src', 'path/to/target')).toEqual(
            new File('path/to/target/dir/subdir', 'file')
        )
    })

})
