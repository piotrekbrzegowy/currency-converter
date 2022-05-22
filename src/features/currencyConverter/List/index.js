import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTransaction, selectTransactions } from "../Form/transactionSlice";
import { Item, List, Button, Heading, Content, Wrapper } from "./styled";

export const TransactionsList = () => {
    const transactions = useSelector(selectTransactions);
    const dispatch = useDispatch();
    const [sumResult, setSumResult] = useState("");
    const [sumAmount, setSumAmount] = useState("");
    const [maxValue, setMaxValue] = useState("");

    const calculateSum = useCallback(() => {
        let resultSum = 0;
        let amountSum = 0;

        transactions.forEach(element => {
            resultSum += element.result;
            amountSum += element.amount;
        });

        if (transactions.rate === "NaN" || transactions.rate === "") {
            setSumResult(0);
            setSumAmount(+amountSum.toFixed(2));
        } else {
            setSumResult(+resultSum.toFixed(2));
            setSumAmount(+amountSum.toFixed(2));
        };
    }, [transactions])

    const getMaxValueObject = useCallback(() => {
        if (sumResult !== 0 || sumResult !== "") {
            const maxValueObject = transactions.reduce((prev, current) => (prev.result > current.result) ? prev : current, 0)
            setMaxValue(maxValueObject);
        } else {
            setMaxValue("");
        };
    }, [transactions, sumResult])

    useEffect(() => {
        calculateSum();
        getMaxValueObject();
    }, [calculateSum, getMaxValueObject])

    return (
        <>
            {maxValue !== "" ?
                <Content>
                    <Wrapper>
                        <Heading>Name</Heading>
                        <Heading>Amount (€)</Heading>
                        <Heading>Result (PLN)</Heading>
                        <Heading>Delete</Heading>
                    </Wrapper>
                    <List>
                        {transactions.map(transaction => (
                            <Item key={transaction.transactionId}>
                                <Content>{transaction.name}</Content>
                                <Content>{transaction.amount}</Content>
                                <Content>{transaction.result}</Content>
                                <Button onClick={() => {
                                    dispatch(removeTransaction(transaction.transactionId))
                                    calculateSum()
                                }}>Delete</Button>
                            </Item>
                        ))}
                    </List>
                    <Wrapper>
                        <Heading>SUM:</Heading>
                        <Heading>{sumAmount}</Heading>
                        <Heading>{sumResult}</Heading>
                    </Wrapper>
                    <Heading>BIGGEST TRANSACTION:</Heading>
                    <Wrapper>
                        <Content>{maxValue.name}</Content>
                        <Content>{maxValue.amount}</Content>
                        <Content>{maxValue.result}</Content>
                    </Wrapper>
                </Content> : <Content></Content>
            }
        </>
    )
};