import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ProvidersProps } from "../../types";

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
