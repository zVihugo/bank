import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const bank = {
    login: false
}


describe("storage", () => {
  
    it("Deve retornar o objeto no localstorage", () => {
        const mockGetItem = jest.spyOn(Storage.prototype, "getItem")
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith("Bank")
    })

    it("Deve criar o objeto no localstorage", () => {
        const mockSetItem = jest.spyOn(Storage.prototype, "setItem")
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith("Bank", JSON.stringify(bank))
    })

    it("Deve alterar o valor do objeto no local storage", () => {
        const mockSetItem = jest.spyOn(Storage.prototype, "setItem")
        changeLocalStorage(bank)
        expect(mockSetItem).toHaveBeenCalledWith("Bank", JSON.stringify(bank))
    })
})