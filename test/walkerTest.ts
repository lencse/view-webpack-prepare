import { tmpdir } from 'os'
import { join } from 'path'
import { sync as mkdirSync} from 'mkdirp'

describe('Walking source dir', () => {
    it('Walk empty dir', () => {
        const dirname = join(tmpdir(), String(Date.now()))
        mkdirSync(dirname)
    })
})
