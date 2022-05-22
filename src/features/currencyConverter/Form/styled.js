import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 900;
    font-size: 38px;
`;

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    margin: 10px 0 0 0;
    display: block;
    border: 1px solid ${({ theme }) => theme.input.border};
    padding: 10px;
    width: 450px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
       width: 100%;
    }
`;

export const Label = styled.label`
    margin: 10px 0 0 0;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin: 0px;
    }
`;

export const Button = styled.button`
    margin: 20px 0 0 0;
    font-weight: 700;
    font-size: 20px;
    padding: 12px 16px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.background};
    color: ${({ theme }) => theme.button.text};
    border: none;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
        background-color: ${({ theme }) => theme.button.backgroundHover};
        transform: scale(0.97);
    }
`;