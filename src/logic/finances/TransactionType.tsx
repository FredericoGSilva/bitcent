import { FakeTransaction } from "./FakeTransaction" 

export default interface Transaction {
    id?: string 
    description: string
    value: number
    date: Date
    type: FakeTransaction 
}

export const emptyTransaction: Transaction = {
    description: '',
    value: 0,
    date: new Date(),
    type: FakeTransaction.EXPENSE
} 