import { walkSync } from 'walk'
import { join } from 'path'

export default class Walker {

    public async getFiles(dir: string): Promise<string[]> {
        const result = []
        walkSync(dir, {
            listeners: {
                files: (base, names) => {
                    names.forEach((file) => result.push(join(dir, file.name)))
                }
            }
        })
        return result
    }

}
