import Transaction from "@/logic/core/finances/Transaction"
import { TransactionType } from "@/logic/core/finances/TransactionType"
import Id from "@/logic/core/shared/id"

const fakeTransactions: Transaction[] = [
    {
        id: Id.newId(),
        description: 'Salário',
        value: 7123.34,
        date: new Date(2023, 4, 1),
        type: TransactionType.RECIPE,
    },
    {
        id: Id.newId(),        
        description: 'Conta de Luz',
        value: 320.00,
        date: new Date(2023, 4, 3),
        type: TransactionType.EXPENSE,
    },
    {
        id: Id.newId(),
        description: 'Aluguel + Cond.',
        value: 1817.59,
        date: new Date(2023, 4, 3),
        type: TransactionType.EXPENSE,
    },
    {
        id: Id.newId(),
        description: 'Cartão de Crédito',
        value: 2200.00,
        date: new Date(2023, 4, 10),
        type: TransactionType.EXPENSE,
    },
    {
        id: Id.newId(),
        description: 'Conta de Água',
        value: 174.35,
        date: new Date(2023, 4, 8),
        type: TransactionType.EXPENSE,
    },
    {
        id: Id.newId(),
        description: 'Mensalidade MBA',
        value: 750.00,
        date: new Date(2023, 4, 2),
        type: TransactionType.EXPENSE,
    },
    
    {
        id: Id.newId(),
        description: 'Investimentos',
        value: 2123.34,
        date: new Date(2023, 4, 1),
        type: TransactionType.RECIPE,
    },
]

export default fakeTransactions