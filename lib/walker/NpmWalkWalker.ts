import { walkSync } from 'walk'
import Walker from './Walker'
import File from '../files/File'

export default class NpmWalkWalker implements Walker {

    public getFiles(dir: string): File[] {
        const result = []
        walkSync(dir, {
            listeners: {
                files: (base, names, next) => {
                    names.forEach((file) => result.push(new File(base, file.name)))
                    next()
                }
            }
        })
        return result
    }

}
