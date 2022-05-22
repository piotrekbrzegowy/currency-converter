import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 900px;
    padding: 20px;
    margin: 50px auto;
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 4px;
`;