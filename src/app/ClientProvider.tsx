"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default ClientProvider;
