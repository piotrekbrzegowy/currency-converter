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
    border-bottom: 1px solid ${({ theme }) => theme.list.border};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Button = styled.button`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.button.border};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.button.backgroundDelete};
    color: ${({ theme }) => theme.button.text};
    font-weight: 700;
    transition: 0.5s;
    width: 100px;
    height: 40px;

    &:hover {
        background-color: ${({ theme }) => theme.button.backgroundDeleteHover};
        transform: scale(0.95);
    }
`;