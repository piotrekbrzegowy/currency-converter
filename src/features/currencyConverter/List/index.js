import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { removeTransaction, selectTransactions } from "../Form/transactionSlice";
import { Item, List, Button, Heading, Content } from "./styled";

export const TransactionsList = () => {
    const transactions = useSelector(selectTransactions);
    const dispatch = useDispatch();

    return (
        <List>
            <Item>
                <Heading>Name</Heading>
                <Heading>Amount(€)</Heading>
                <Heading>Result(PLN)</Heading>
                <Heading>Delete</Heading>
            </Item>
            {transactions.map(transaction => (
                <>
                    <Item key={transaction.transactionId}>
                        <Content>{transaction.name}</Content>
                        <Content>{transaction.amount}</Content>
                        <Content>{transaction.result}</Content>
                        <Button onClick={() => dispatch(removeTransaction(transaction.transactionId))}>DEL</Button>
                    </Item>
                </>
            ))}
        </List>

    )
};