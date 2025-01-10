"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </ReduxProvider>
  );
};

export default ClientProvider;
