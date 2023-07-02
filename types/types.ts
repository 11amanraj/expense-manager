export interface history {
    date: Date,
    type: string,
    amount: number
}

export interface balance {
    currentAmount: number,
    history: history[] | null
}

export interface notification {
    message: string,
    error: boolean,
    id: string
}
