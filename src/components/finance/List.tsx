import Transaction from "@/logic/core/finances/Transaction"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface ListProps {
    transaction: Transaction[]
    selectTransaction?: (Transaction : Transaction) => void
}

export default function List(props: ListProps) {
    
}