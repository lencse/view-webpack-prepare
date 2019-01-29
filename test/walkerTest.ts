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
})
