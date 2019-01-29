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
        return this.compilers.has(extension) ?
            this.compilers.get(extension) :
            (content: string, options: any) => content
    }

}
