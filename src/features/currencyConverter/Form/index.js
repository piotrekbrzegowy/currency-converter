import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Result } from "./Result";
import { Button, Label, StyledForm, StyledInput, Title } from "./styled";
import { addTransaction, updateTransaction } from "./transactionSlice";

export const Form = () => {
  const [rate, setRate] = useState(4);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const dispatch = useDispatch();

  const calculateResult = (amount, rate) => {
    const result = amount * rate;
    setResult(+result.toFixed(2));
  };

  const onRateChange = ({ target }) => {
    setRate(target.value);
    dispatch(updateTransaction(target.value))
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
      rate: +rate,
      name: name,
      amount: +amount,
      result: +result,
      transactionId: nanoid(),
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
        <StyledInput
          id="name"
          value={name}
          onChange={onNameChange}
          placeholder="Enter the transaction name"
          type="text"
          required
        />
        <Label htmlFor="name">Transaction name</Label>
        <StyledInput
          id="amount"
          value={amount}
          onChange={onAmountChange}
          placeholder="Enter the amount in €"
          type="number"
          required
          step="0.01"
          min="0" />
        <Label htmlFor="amount">Amount in €</Label>
        <StyledInput
          id="rate"
          value={rate}
          onChange={onRateChange}
          placeholder="Enter your custom exchange rate"
          type="number"
          step="0.01"
          min="0"
        />
        <Label htmlFor="rate">Custom exchange rate</Label>
        <Button>Add transaction</Button>
      </StyledForm>
      {amount && <Result>{amount} € = {result} PLN</Result>}
    </>
  )
}