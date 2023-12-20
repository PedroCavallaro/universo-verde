"use client";

import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

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
                    } h-[15rem] bg-red-500 rounded-md relative shadow-lg overflow-hidden`
                )}
            >
                <Image
                    src={"/galeria1.png"}
                    alt="a"
                    width={300}
                    height={300}
                    className="object-fill absolute right-0"
                />

                <Button
                    className="ml-5 bottom-4 px-4 rounded-full text-lg bg-white text-black h-10 absolute hover:bg-emerald-400 hover:text-white transition-all "
                    onClick={() => handleModal()}
                >
                    <p>Saber Mais</p>
                </Button>
            </div>
        </>
    );
}
