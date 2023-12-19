"use client";
import Image from "next/image";
import { Button } from "../Button";
import { useModal } from "@/context/ModalContext";

export default function ProductModal() {
    const { isOpen, handleModal } = useModal();
    return (
        <>
            {isOpen && (
                <div className="w-[100vw] h-[100vh] fixed top-0 z-30 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="w-[918px] h-[780px] flex flex-col bg-white rounded-3xl relative overflow-hidden">
                        <Button
                            onClick={() => handleModal()}
                            className="absolute right-4 top-4 h-8 w-8 text-md bg-black"
                        >
                            X
                        </Button>
                        <div className="h-[10rem] w-full bg-[#f5e7d4] " />
                        <div className="flex gap-6 p-6 relative -top-12">
                            <div className="flex flex-col gap-10">
                                <h2 className="text-5xl font-bold font-title">
                                    Ambiente no pote
                                </h2>
                                <p className="text-xl">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Deserunt, fugiat
                                    provident! Debitis ratione, qui adipisci
                                    molestias suscipit quis dolores labore odio
                                    autem aliquid excepturi commodi corrupti
                                    ipsam illo. Quas, officia. Laboriosam,
                                    maxime et ea
                                </p>

                                <p className="text-2xl text-green-500">
                                    R$25,00
                                </p>
                                <Button className="text-lg h-10">
                                    <p>Saber mais</p>
                                </Button>
                            </div>
                            <Image
                                src={"/galeria1.png"}
                                alt="a"
                                width={500}
                                height={400}
                                className="w-[450px] h-[563px] rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
