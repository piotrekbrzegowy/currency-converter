import styled from "styled-components";

export const Wrapper = styled.p`
    font-weight: 700;
    font-size: 30px;
    text-align: right;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        text-align: center;
    }
`;