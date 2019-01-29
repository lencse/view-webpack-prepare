import { tmpdir } from 'os'
import { join } from 'path'
import { sync as mkdirSync } from 'mkdirp'
import Walker from '../src/walker/Walker'

describe('Walking source dir', () => {

    it('Walk empty dir', () => {
        const dirname = join(tmpdir(), String(Date.now()))
        mkdirSync(dirname)
        const walker = new Walker()
        expect(walker.getFiles(dirname)).toEqual([])
    })

    it('Walk dir with one nonrelevant file', async () => {
        const dirname = join(process.cwd(), 'test', 'fixtures', 'one-nonrelevant-file')
        const walker = new Walker()
        expect(walker.getFiles(dirname)).toEqual([
            join(dirname, '.gitkeep')
        ])
    })

    it('Walk dir with one html file', async () => {
        const dirname = join(process.cwd(), 'test', 'fixtures', 'one-html-file')
        const walker = new Walker()
        expect(walker.getFiles(dirname)).toEqual([
            join(dirname, 'index.html')
        ])
    })

    it('Walk dir with subdirs', async () => {
        const dirname = join(process.cwd(), 'test', 'fixtures', 'one-html-file')
        const walker = new Walker()
        const files = walker.getFiles(dirname)
        console.log(files)
        // expect(files.length).toBe(3)
        // expect(walker.getFiles(dirname)).toEqual([
        //     join(dirname, 'index.html')
        // ])
    })

})
