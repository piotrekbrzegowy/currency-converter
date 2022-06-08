import { Description, Spinner, Wrapper } from "./styled";

export const Loader = () => (
    <Wrapper>
        <Description>Please wait, fetching default exchange rate…</Description>
        <Spinner />
    </Wrapper>
);