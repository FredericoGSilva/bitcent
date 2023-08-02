import { useState } from "react";
import Transaction, { emptyTransaction } from "@/logic/core/finances/Transaction";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import fakeTransactions from "@/data/constants/FakeTransaction";
import Summary from "./Summary";
import Form from "./Form";
import Id from "@/logic/core/shared/id";
import Content from "../template/Content";

export default function Finance() {
  const [transactions, setTransactions] = useState<Transaction[]>(fakeTransactions);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  // salvar nova transação.
  function toSalve(transaction: Transaction) {
    const otherTransactions = transactions.filter((t) => t.id != transaction.id);
    setTransactions([
      ...otherTransactions,
      { ...transaction, id: transaction.id ?? Id.newId() },
    ]);
    setTransaction(null);
  }

  // excluir
  function remove(transaction: Transaction) {
    const otherTransactions = transactions.filter((t) => t.id != transaction.id);
    setTransactions(otherTransactions);
    setTransaction(null);
  }

  return (
    <Page>
      <Header />
      <Content>
        <Summary transactions={transactions} />
        <div>
          <button onClick={() => setTransaction(emptyTransaction)}>
            <span>Nova Transação</span>
          </button>
        </div>
        {transaction ? (
            <Form transaction={transaction}
            toSalve={toSalve}
            remove={remove}
            cancel={() => setTransaction(null)}
            />
        ) : (
            <List transactions={transactions} 
            selectTransaction={setTransaction}
            />
        )}
      </Content>
    </Page>
  );
}
