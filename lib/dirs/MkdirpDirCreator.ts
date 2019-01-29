import { sync as mkdirSync } from 'mkdirp'
import DirCreator from './DirCreator'

export default class MkdirpDirCreator implements DirCreator {

    public create(dir: string): void {
        mkdirSync(dir)
    }

}
