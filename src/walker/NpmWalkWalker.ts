import { walkSync } from 'walk'
import { join } from 'path'

export default class NpmWalkWalker {

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
