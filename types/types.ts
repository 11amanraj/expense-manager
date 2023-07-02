export enum transactionType {
    EXPENSE = 'expense',
    CREDIT = 'credit'
}

export interface transaction {
    date: Date,
    type: transactionType,
    amount: number
}

export interface balance {
    currentAmount: number,
    history: transaction[]
}

export interface notification {
    message: string,
    error: boolean,
    id: string
}
