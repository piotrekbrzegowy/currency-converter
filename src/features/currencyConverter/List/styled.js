import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-word;
`;

export const Heading = styled.p`

`
export const Content = styled.span``;

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
`;