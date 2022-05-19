import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-word;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const Item = styled.li`
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;