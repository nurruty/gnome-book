const moxios = require("moxios")




describe('fetchGnomes action', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })
})