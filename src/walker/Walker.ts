import { walkSync } from 'walk'

export default class Walker {

    public async getFiles(dir: string): Promise<string[]> {
        console.log(dir)
        walkSync(dir, {
            listeners: {
                files: (base, names, next) => {
                    console.log(base, names)
                    // return next()
                }
            }
        })
        return []
    }

}
