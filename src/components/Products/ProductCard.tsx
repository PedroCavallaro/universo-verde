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
                        isBigger ? "lg:w-[50%]" : "lg:w-[55%]"
                    } h-[15rem] w-[50%] bg-red-500 rounded-md relative shadow-lg overflow-hidden`
                )}
            >
                <Image
                    src={"/galeria1.png"}
                    alt="a"
                    width={300}
                    height={300}
                    className="object-cover absolute w-[100%] h-[100%] right-0"
                />

                <Button
                    className="ml-4 py-1 h-fit bottom-4 px-6 rounded-full lg:text-lg text-md bg-white text-black absolute hover:bg-emerald-400 hover:text-white transition-all "
                    onClick={() => handleModal()}
                >
                    <p>Saiba Mais</p>
                </Button>
            </div>
        </>
    );
}
