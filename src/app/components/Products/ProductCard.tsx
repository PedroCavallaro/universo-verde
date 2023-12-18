"use client";

import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { useModal } from "@/app/context/ModalContext";

interface ProductCardProps {
    isBigger: boolean;
}

export default function ProductCard({ isBigger }: ProductCardProps) {
    const { handleModal } = useModal();
    return (
        <>
            <div
                className={twMerge(
                    `${
                        isBigger ? "w-[50%]" : "w-[55%]"
                    } h-[15rem] bg-red-500 rounded-md shadow-lg`
                )}
            >
                <Button onClick={() => handleModal()}>
                    <p>Saber Mais</p>
                </Button>
            </div>
        </>
    );
}
