import { Loader } from "./Loader";

export const StateChecker = ({ isLoading, isError, children }) => isLoading ? <Loader /> : children