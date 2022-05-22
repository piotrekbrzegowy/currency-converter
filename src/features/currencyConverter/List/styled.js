import styled from "styled-components";

export const Content = styled.span``;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;
    margin: 0 0 10px 0;
    grid-gap: 10px;
    word-break: break-word;
`;

export const Heading = styled.p`
    font-weight: 900;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-word;
`;

export const Item = styled.li`
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Button = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #d11a2a;
    color: white;
    font-weight: 700;
    transition: 0.5s;

    &:hover {
        background-color: #d11a2b;
        transform: scale(0.95);
    }
`;