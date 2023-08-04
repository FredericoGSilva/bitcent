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
import { IconPlus } from "@tabler/icons-react";

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
      <Content className="gap-8">
        <Summary transactions={transactions} />
        <div>
          <button className="btn bg-blue-500" onClick={() => setTransaction(emptyTransaction)}>
            <IconPlus />
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
