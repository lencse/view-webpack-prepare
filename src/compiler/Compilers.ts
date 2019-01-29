export default class Compilers {

    private compilers: Map<
        string,
        (content: string, options: any) => string
    > = new Map<
        string, (content: string, options: any) => string
    >()

    public add(extension: string, compiler: (content: string, options: any) => string): void {
        this.compilers.set(extension, compiler)
    }

    public get(extension: string): (content: string, options: any) => string {
        if (this.compilers.has(extension)) {
            return this.compilers.get(extension)
        }
        return (content: string, options: any) => content
    }

}
