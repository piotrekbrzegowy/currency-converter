import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Result } from "./Result";
import { Button, Content, StyledForm, StyledInput, Title } from "./styled";
import { addTransaction } from "./transactionSlice";

export const Form = () => {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const dispatch = useDispatch();

  const calculateResult = (amount, rate) => {
    setResult(amount / rate);
  };

  const onRateChange = ({ target }) => {
    setRate(target.value);
  };

  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTransaction({
      rate: rate,
      name: name,
      amount: amount,
      result: result,
      id: nanoid(),
    }));

    setName("");
    setAmount("");
    setResult("");
  };

  useEffect(() => {
    calculateResult(amount, rate)
  }, [amount, rate])
  return (
    <>
      <Title>Currency converter € to PLN</Title>
      <StyledForm onSubmit={onFormSubmit}>
        <Content>Custom exchange rate</Content>
        <StyledInput
          value={rate}
          onChange={onRateChange}
          placeholder="Enter your custom exchange rate"
          type="number"
          step="0.01"
          min="0"
        />
        <Content>Transaction name</Content>
        <StyledInput
          value={name}
          onChange={onNameChange}
          placeholder="Enter the transaction name"
          type="text"
          required
        />
        <Content>Amount in €</Content>
        <StyledInput
          value={amount}
          onChange={onAmountChange}
          placeholder="Enter the amount in €"
          type="number"
          required
          step="0.01"
          min="0" />
        <Button>Add transaction</Button>
      </StyledForm>
      <Result>{amount} € = {result} PLN</Result>
    </>
  )
}