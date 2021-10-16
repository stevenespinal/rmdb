const useHomeFetch = require("./useHomeFetch")
// @ponicode
describe("useHomeFetch.useHomeFetch", () => {
    test("0", () => {
        let callFunction = () => {
            useHomeFetch.useHomeFetch(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            useHomeFetch.useHomeFetch("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            useHomeFetch.useHomeFetch(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            useHomeFetch.useHomeFetch("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            useHomeFetch.useHomeFetch("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            useHomeFetch.useHomeFetch(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
