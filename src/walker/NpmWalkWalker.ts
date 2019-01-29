import { walkSync } from 'walk'
import { join } from 'path'
import Walker from './Walker'

export default class NpmWalkWalker implements Walker {

    public getFiles(dir: string): string[] {
        const result = []
        walkSync(dir, {
            listeners: {
                files: (base, names, next) => {
                    names.forEach((file) => result.push(join(base, file.name)))
                    next()
                }
            }
        })
        return result
    }

}
