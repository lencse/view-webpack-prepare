import Compilers from '../src/compiler/Compilers'

describe('Compilers', () => {

    const compilers = new Compilers()
    compilers.add(
        'html',
        (content: string, options: any) => [content.toLowerCase(), options.foo].join('-')
    )

    it('Default', () => {
        expect(compilers.get('txt')('TEST', {})).toEqual('TEST')
    })

    it('Get compiler', () => {
        expect(compilers.get('html')('TEST', {foo: 'bar'})).toEqual('test-bar')
    })

})
