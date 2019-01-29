export default class Compilers {

    private compilers: Map<string, (content: string) => string> = new Map<string, (content: string) => string>()

    public add(extension: string, compiler: (content: string) => string): void {
        this.compilers.set(extension, compiler)
    }

    public get(extension: string): (content: string) => string {
        if (this.compilers.has(extension)) {
            return this.compilers.get(extension)
        }
        return (content: string) => content
    }

}
