import { writeFileSync } from 'fs'
import File from './File'

export default function write(file: File, content: string): void {
    return writeFileSync(file.fullPath, content)
}
