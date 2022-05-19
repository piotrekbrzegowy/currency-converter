import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Result } from "./Result";
import { Button, Content, StyledForm, StyledInput, Title } from "./styled";
import { addTransaction } from "./transactionSlice";

export const Form = () => {
  const [newTransactionRate, setNewTransactionRate] = useState("4");
  const [newTransactionName, setNewTransactionName] = useState("");
  const [newTransactionAmount, setNewTransactionAmount] = useState("");
  const [newTransactionResult, setNewTransactionResult] = useState("");
  const dispatch = useDispatch();

  const calculateResult = (newTransactionAmount, newTransactionRate) => {
    let newValue = newTransactionAmount / newTransactionRate;
    setNewTransactionResult(newValue)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTransaction({
      rate: newTransactionRate,
      name: newTransactionName,
      amount: newTransactionAmount,
      result: newTransactionResult,
      id: nanoid(),
    }));

    setNewTransactionName("");
    setNewTransactionAmount("");
    setNewTransactionResult("");
  };

  return (
    <>
      <Title>Currency converter € to PLN</Title>
      <StyledForm onSubmit={onFormSubmit}>
        <Content>Custom exchange rate</Content>
        <StyledInput
          value={newTransactionRate}
          onChange={({ target }) => {
            setNewTransactionRate(target.value)
            calculateResult(newTransactionAmount, newTransactionRate)
          }}
          placeholder="Enter your custom exchange rate"
          type="number"
          step="0.01"
          min="0"
        />
        <Content>Transaction name</Content>
        <StyledInput
          value={newTransactionName}
          onChange={({ target }) => setNewTransactionName(target.value)}
          placeholder="Enter the transaction name"
          type="text"
          required
        />
        <Content>Amount in €</Content>
        <StyledInput
          value={newTransactionAmount}
          onChange={({ target }) => {
            setNewTransactionAmount(target.value)
            calculateResult(newTransactionAmount, newTransactionRate)
          }}
          placeholder="Enter the amount in €"
          type="number"
          required
          step="0.01"
          min="0" />
        <Button>Add transaction</Button>
      </StyledForm>
      <Result>{newTransactionAmount} € = {newTransactionResult} PLN</Result>
    </>
  )
}