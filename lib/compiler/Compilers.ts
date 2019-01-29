export default class Compilers {

    private compilers: Map<
        string,
        (content: string, params: any) => string
    > = new Map<
        string, (content: string, params: any) => string
    >()

    public add(extension: string, compiler: (content: string, params: any) => string): void {
        this.compilers.set(extension, compiler)
    }

    public get(extension: string): (content: string, params: any) => string {
        return this.compilers.has(extension) ?
            this.compilers.get(extension) :
            (content: string, params: any) => content
    }

}
