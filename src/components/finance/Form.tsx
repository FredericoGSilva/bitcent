import Transaction from "@/logic/core/finances/Transaction";
import formatDate from "@/logic/utils/formatDate";
import { useState } from "react";

interface FormProps {
    transaction: Transaction
    toSalve?: (transaction: Transaction) => void
    cancel?: () => void
    remove?: (transaction: Transaction) => void 
}

export default function Form(props: FormProps) {
    const [transaction, setTransaction] = useState<Transaction>(props.transaction)
  return (
    <div className={`
        flex flex-col border border-zinc-700
        roudned-xl overflow-hidden
    `}>
      <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
      <div className="flex flex-col gap-4 p-4 sm:p-7">
        <input 
            type="text" 
            placeholder="Descrição" 
            className="input"
            value={transaction?.description ?? ''}
            onChange={event => (
              setTransaction({
                ...transaction,
                description: event.target.value
              })
            )}
        />

        <input
          type="number"
          placeholder="Valor"
          className="input"
          value={transaction?.value ?? ''}
          onChange={event => (
            setTransaction({
              ...transaction,
              value: +event.target.value
            })
          )}
        />
        
        <input
          type="date"
          placeholder="Data"
          className="input"
          value={formatDate.yymmdd.format(props.transaction.date ?? new Date())}
          onChange={event => (
            setTransaction({
              ...transaction,
              date: new Date(`${event.target.value}`)
            })
          )}
        />
        
      </div>
    </div>
  );
}
