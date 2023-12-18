"use client";
import { ReactNode } from "react";
import { ModalContextProvider } from "../context/ModalContext";

export const Providers = ({ children }: { children: ReactNode }) => {
    return <ModalContextProvider>{children}</ModalContextProvider>;
};
