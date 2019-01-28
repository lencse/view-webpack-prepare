import Params from '../src/Params'

describe('Test params', () => {
    it('Test srcDir', () => {
        const params = new Params('srcDir')
        expect(params.srcDir).toEqual('srcDir')
    })
})
