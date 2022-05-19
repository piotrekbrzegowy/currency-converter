import { Container } from "../../common/Container";
import { Form } from "./Form";
import { TransactionsList } from "./List";

export const CurrencyConverter = () => (
    <Container>
        <Form />
        <TransactionsList />
    </Container>
);