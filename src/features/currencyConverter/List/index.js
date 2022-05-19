import { useSelector } from "react-redux";
import { selectTransactions } from "../Form/transactionSlice";
import { Item, List } from "./styled";

export const TransactionsList = () => {
    const transactions = useSelector(selectTransactions);

    return (
        <List>
            <Item>Name</Item>
            <Item>Amount(€)</Item>
            <Item>Result(PLN)</Item>
            {transactions.transactions.map(({ name, amount, result }) => (
                <>
                    <Item>{name}</Item>
                    <Item>{amount}</Item>
                    <Item>{result}</Item>
                </>
            ))}
        </List>
    )
};