import Compilers from '../src/compiler/Compilers'

describe('Compilers', () => {

    it('Default', () => {
        const compilers = new Compilers()
        expect(compilers.get('txt')('TEST')).toEqual('TEST')
    })

})
