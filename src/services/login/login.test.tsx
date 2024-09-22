import login from "./login"

describe("login", () => {
    const mockEmail = "zvihugo@hotmail.com"
    
    it("should return alert with valid email", async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy();
    })

    it("should return alert with invalid email", async () => {
        const response = await login("email@invalido.com")
        expect(response).toBeFalsy();
    })
})