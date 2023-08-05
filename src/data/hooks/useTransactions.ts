import Transaction from "@/logic/core/finances/Transaction";
import { useEffect, useState } from "react";
import fakeTransactions from "../constants/FakeTransaction";
import Id from "@/logic/core/shared/id";

export default function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [transaction, setTransaction] = useState<Transaction | null>(null);

    useEffect(SearchTransactions, [])

    function SearchTransactions() {
        setTransactions(fakeTransactions)
    }
    
    function toSalve(transaction: Transaction) {
        const otherTransactions = transactions.filter((t) => t.id != transaction.id);
        setTransactions([
            ...otherTransactions,
            { ...transaction, id: transaction.id ?? Id.newId() },
        ]);
        setTransaction(null);
    }

    function remove(transaction: Transaction) {
        const otherTransactions = transactions.filter((t) => t.id != transaction.id);
        setTransactions(otherTransactions);
        setTransaction(null);
    }

    function select(transaction: Transaction) {
        setTransaction(transaction)
    }

    function cancel() {
        setTransaction(null)
    }

    return {
        transactions,
        transaction,
        toSalve,
        remove,
        select,
        cancel
    }
}