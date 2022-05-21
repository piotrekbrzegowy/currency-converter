import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTransaction, selectTransactions } from "../Form/transactionSlice";
import { Item, List, Button, Heading, Content } from "./styled";

export const TransactionsList = () => {
    const transactions = useSelector(selectTransactions);
    const dispatch = useDispatch();
    const [sumResult, setSumResult] = useState("");
    const [sumAmount, setSumAmount] = useState("");
    const [maxValue, setMaxValue] = useState("");

    const calculateSum = () => {
        let resultSum = 0;
        let amountSum = 0;

        transactions.forEach(element => {
            resultSum += element.result;
            amountSum += element.amount;
        });
        if (transactions.rate === "NaN" || transactions.rate === "") {
            setSumResult(0);
            setSumAmount(+amountSum);
        } else {
            setSumResult(+resultSum);
            setSumAmount(+amountSum);
        }
    }

    const getMaxValueObject = () => {
        if (sumResult != 0 || sumResult != "") {
            const maxValueObject = transactions.reduce((prev, current) => (prev.result > current.result) ? prev : current, 0)
            setMaxValue(maxValueObject);
        } else {
            setMaxValue("");
        };
    }

    useEffect(() => {
        calculateSum();
        getMaxValueObject();
    }, [calculateSum, getMaxValueObject])

    return (
        <List>
            <Item>
                <Heading>Name</Heading>
                <Heading>Amount (€)</Heading>
                <Heading>Result (PLN)</Heading>
                <Heading>Delete</Heading>
            </Item>
            {transactions.map(transaction => (
                <>
                    <Item key={transaction.transactionId}>
                        <Content>{transaction.name}</Content>
                        <Content>{transaction.amount}</Content>
                        <Content>{transaction.result}</Content>
                        <Button onClick={() => {
                            dispatch(removeTransaction(transaction.transactionId))
                            calculateSum()
                        }}>DEL</Button>
                    </Item>
                </>
            ))}
            <Item>
                <Heading>SUM:</Heading>
                <Heading>{sumAmount}</Heading>
                <Heading>{sumResult}</Heading>
                <Heading></Heading>
            </Item>
            <Item>
                <Heading>BIGGEST TRANSACTION:</Heading>
                <Heading></Heading>
                <Heading></Heading>
                <Heading></Heading>
            </Item>
            <Item>
                <Content>{maxValue.name}</Content>
                <Content>{maxValue.amount}</Content>
                <Content>{maxValue.result}</Content>
                <Content></Content>
            </Item>
        </List>

    )
};