import Transaction from "@/logic/core/finances/Transaction";
import { TransactionType } from "@/logic/core/finances/TransactionType";
import formatDate from "@/logic/utils/formatDate";
import { IconCheck, IconTrash, IconX } from "@tabler/icons-react";
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
              date: new Date(`${event.target.value} `)
            })
          )}
        />
        <div className="flex gap-8">
            <div className="flex gap-2">
              <input 
                type="radio"
                name="type"
                value="recipe"
                checked={transaction.type === 'recipe'}
                onChange={() => (
                  setTransaction({
                    ...transaction,
                    type: TransactionType.RECIPE
                  })
                )}
              />
              <span>Receita</span>
              <input 
                type="radio"
                name="type"
                value="expense"
                checked={transaction.type === 'expense'}
                onChange={() => (
                  setTransaction({
                    ...transaction,
                    type: TransactionType.EXPENSE
                  })
                )}
              />
              <span>Despesa</span>
            </div>
        </div>
      </div>
      <div className="flex px-4 sm:px-4 py-4 gap-3 bg-zinc-800">
        <button className="btn bg-green-500" onClick={() => {props.toSalve?.(transaction)}}>
          <IconCheck />
          <span>Salvar</span>
        </button>
        <button className="btn bg-zinc-500" onClick={() => {props.cancel?.()}}>
          <IconX />
          <span className="hidden sm:inline">Cancelar</span>
        </button>
        <span className="flex-1"></span>
        {props.transaction.id && (
          <button className="btn bg-red-500" onClick={() => {props.remove?.(transaction)}}>
            <IconTrash />
            <span className="hidden sm:inline">Excluir</span>
          </button>
        )}
      </div>
    </div>
  );
}
