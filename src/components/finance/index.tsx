import { useState } from "react";
import Transaction from "@/logic/core/finances/Transaction";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import fakeTransactions from "@/data/constants/FakeTransaction";
import Summary from "./Summary";

export default function Finance() {
    const [transactions] = useState<Transaction[]>(fakeTransactions)
    return (
        <Page>
            <Header />
            <Summary transactions={transactions}/>
            <List transactions={transactions}
            />
        </Page>
    )
}
  