import { emptyTransaction } from "@/logic/core/finances/Transaction";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import Summary from "./Summary";
import Form from "./Form";
import Content from "../template/Content";
import { IconPlus } from "@tabler/icons-react";
import useTransactions from "@/data/hooks/useTransactions";

export default function Finance() {

  const {transactions, transaction, toSalve, remove, select, cancel} = useTransactions()

  return (
    <Page>
      <Header />
      <Content className="gap-8">
        <Summary transactions={transactions} />
        <div>
          <button className="btn bg-blue-500" onClick={() => select(emptyTransaction)}>
            <IconPlus />
            <span>Nova Transação</span>
          </button>
        </div>
        {transaction ? (
            <Form transaction={transaction}
            toSalve={toSalve}
            remove={remove}
            cancel={cancel}
            />
        ) : (
            <List transactions={transactions} 
            selectTransaction={select}
            />
        )}
      </Content>
    </Page>
  );
}
