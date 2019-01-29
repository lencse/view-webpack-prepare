import { tmpdir } from 'os'
import { join } from 'path'
import NpmWalkWalker from '../src/walker/NpmWalkWalker'
import MkdirpDirCreator from '../src/dirs/MkdirpDirCreator'

describe('Walking source dir', () => {

    it('Walk empty dir', () => {
        const dirname = join(tmpdir(), String(Date.now()))
        const createDir = new MkdirpDirCreator()
        createDir.create(dirname)
        const walker = new NpmWalkWalker()
        expect(walker.getFiles(dirname)).toEqual([])
    })

    it('Walk dir with one nonrelevant file', async () => {
        const dirname = join(process.cwd(), 'test', 'fixtures', 'one-nonrelevant-file')
        const walker = new NpmWalkWalker()
        expect(walker.getFiles(dirname)).toEqual([
            join(dirname, '.gitkeep')
        ])
    })

    it('Walk dir with one html file', async () => {
        const dirname = join(process.cwd(), 'test', 'fixtures', 'one-html-file')
        const walker = new NpmWalkWalker()
        expect(walker.getFiles(dirname)).toEqual([
            join(dirname, 'index.html')
        ])
    })

    it('Walk dir with subdirs', async () => {
        const dirname = join(process.cwd(), 'test', 'fixtures', 'templates-in-subdirs')
        const walker = new NpmWalkWalker()
        const files = walker.getFiles(dirname)
        expect(files.length).toBe(3)
        const test = ['index.html', 'subdir1/tpl.html', 'subdir2/tpl.html']
        test.forEach((expected) => {
            expect(
                files.filter(
                    (file) => file === join(dirname, expected)
                ).length
            ).toBe(1)
        })
    })

})
