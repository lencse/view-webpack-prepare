import { tmpdir } from 'os'
import { join } from 'path'
import { sync as mkdirSync } from 'mkdirp'
import Walker from '../src/walker/Walker'

describe('Walking source dir', () => {
    it('Walk empty dir', async () => {
        const dirname = join(tmpdir(), String(Date.now()))
        mkdirSync(dirname)
        const walker = new Walker()
        expect(await walker.getFiles(dirname)).toEqual([])
    })
})
