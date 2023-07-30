import Transaction from "@/logic/core/finances/Transaction"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface ListProps {
    transaction: Transaction[]
    selectTransaction?: (Transaction : Transaction) => void
}

export default function List(props: ListProps) {
    function renderType(transaction: Transaction) {
        return (
            <span className={`
                flex justify-center items-center
                h-8 w-8 sm:h-10 p-1.5 rounded-full
            `}>
                {transaction.type === 'recipe' ? <IconTrendingUp /> : <IconTrendingDown />}
            </span>
        )
    }

    function renderLine(transaction: Transaction, index: number) {
        return (
            <div key={transaction.id} className={`
                flex items-center gap-3 cursor-pointer
                ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}

            `}onClick={() => props.selectTransaction?.(transaction)} >
                {renderType(transaction)}
                <span className="w-full md:w-1/2">{transaction.description}</span>
            </div>
        )        
    }

    return (
        <div className={`
            flex flex-col border border-zinc-700
            rouded-xl overflow-hidden
        `}>
            {props.transaction.map(renderLine)}
        </div>
    )
}