import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: center;
`;

export const Content = styled.span`
    max-width: 200px;
    display: inline-block;
`;

export const Title = styled.h1`
    color: black;
    text-align: center;
`;

export const StyledInput = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: #3929e6;
    color: white;
    border: none;
    transition: 0.5s;

    &:hover {
        background-color: #2626a3;
        transform: scale(1.03);
    }
`;