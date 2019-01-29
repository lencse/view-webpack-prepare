import { walkSync } from 'walk'

export default class Walker {

    public async getFiles(dir: string): Promise<string[]> {
        walkSync(dir, {
            listeners: {
                names: (base, names, next) => {
                    console.log(base, names)
                    // return next()
                }
            }
        })
        return []
    }

}
