import Compilers from '../src/compiler/Compilers'

describe('Compilers', () => {

    const compilers = new Compilers()
    compilers.add('html', (content: string) => content.toLowerCase())

    it('Default', () => {
        expect(compilers.get('txt')('TEST')).toEqual('TEST')
    })

    it('Get compiler', () => {
        expect(compilers.get('html')('TEST')).toEqual('test')
    })

})
