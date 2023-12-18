import { ReactNode, createContext, useContext, useState } from "react";

interface ModalContextProps {
    isOpen: boolean;
    handleModal: () => void;
}

const ModalContext = createContext({} as ModalContextProps);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <ModalContext.Provider value={{ isOpen, handleModal }}>
            {children}
        </ModalContext.Provider>
    );
};
export const useModal = () => useContext(ModalContext);
