import { readFileSync } from 'fs'
import File from './File'

export default function content(file: File): string {
    return readFileSync(file.fullPath).toString()
}
