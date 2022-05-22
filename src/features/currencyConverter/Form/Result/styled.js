import styled from "styled-components";

export const Wrapper = styled.p`
    font-weight: 700;
    font-size: 30px;
    text-align: left;
    word-break: break-word;
    color: ${({ theme }) => theme.text.secondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        text-align: center;
    }
`;