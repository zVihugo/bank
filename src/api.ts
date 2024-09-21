const conta = {
    email: "zvihugo@hotmail.com",
    password: '123456',
    name: "Victor",
    balance: "R$ 02,50",
    id: "1"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1000);
})