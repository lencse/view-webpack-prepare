import { walkSync } from 'walk'
import { join } from 'path'

export default class Walker {

    public getFiles(dir: string): string[] {
        const result = []
        walkSync(dir, {
            listeners: {
                files: (base, names, next) => {
                    names.forEach((file) => result.push(join(dir, file.name)))
                    next()
                }
            }
        })
        return result
    }

}
