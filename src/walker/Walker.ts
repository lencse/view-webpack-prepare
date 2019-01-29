import File from '../files/File'

export default interface Walker {

    getFiles(dir: string): File[]

}
