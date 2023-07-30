import { useState } from "react";
import Transaction from "@/logic/core/finances/Transaction";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import fakeTransactions from "@/data/constants/FakeTransaction";

export default function Finance() {
    const [transactions] = useState<Transaction[]>(fakeTransactions)
    return (
        <Page>
            <Header />
            <List transaction={transactions}
            />
        </Page>
    )
}
  