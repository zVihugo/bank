interface IBank {
    login: boolean
}

const bank = {
    login: false
}


export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem("Bank")
}

export const createLocalStorage = (): void => {
    localStorage.setItem("Bank", JSON.stringify(bank));
}

export const changeLocalStorage = (bank: IBank) => {
    localStorage.setItem("Bank", JSON.stringify(bank));
}