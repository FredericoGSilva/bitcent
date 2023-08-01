import Transaction from "@/logic/core/finances/Transaction";
import SummaryItem from "./SummaryItem";
import { IconArrowsDoubleSwNe, IconCash, IconCreditCard } from "@tabler/icons-react";
import { TransactionType } from "@/logic/core/finances/TransactionType";

interface SummaryProps {
  transactions: Transaction[]
  className?: string
}

export default function Summary(props: SummaryProps) {

  const totalize = (total: number, transaction: Transaction) => total + transaction.value

  const recipe = props.transactions
  .filter((transaction) => transaction.type === TransactionType.RECIPE)
  .reduce(totalize, 0)

  const expense = props.transactions
  .filter((transaction) => transaction.type === TransactionType.EXPENSE)
  .reduce(totalize, 0)

  const total = recipe - expense

  return (
    <div className={`
        grid grid-cols-1 md:grid-cols-3 gap-4
    `}>
      <SummaryItem 
        title="Receitas"
        value={recipe}
        icon={<IconCash />}
        iconClassName='text-green-500'
        />
        <SummaryItem 
            title="Despesas"
            value={expense}
            icon={<IconCreditCard />}
            iconClassName='text-red-500'
        />
        <SummaryItem 
            title="Total"
            value={total}
            icon={<IconArrowsDoubleSwNe />}
            iconClassName='text-yellow-500'
            valueClassName={total > 0 ? 'text-green-500' : total < 0 ? 'text-red-500' : ''}
        />
    </div>
  );
}
