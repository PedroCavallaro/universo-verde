"use client";
import Image from "next/image";
import { Button } from "../Button";
import { useModal } from "@/context/ModalContext";

export default function ProductModal() {
    const { isOpen, handleModal } = useModal();
    return (
        <>
            {isOpen && (
                <div className="w-[100vw] h-[100vh] fixed top-0 z-50 bg-black bg-opacity-50 flex items-center justify-center  ">
                    <div className="lg:w-[918px] w-[95vw] lg:h-[780px] h-[800px]  flex flex-col bg-white rounded-2xl relative lg:overflow-hidden animate-drop">
                        <Button
                            onClick={() => handleModal()}
                            className="absolute right-4 top-4 h-8 w-8 text-md rounded-full bg-white z-30 text-black"
                        >
                            X
                        </Button>
                        <div className=" lg:h-[10rem] w-full bg-[#f5e7d4] static rounded-tl-2xl rounded-tr-2xl">
                            <h2 className="text-5xl flex justify-center items-center h-[10rem] font-bold font-title text-center lg:hidden ">
                                Ambiente no pote
                            </h2>
                        </div>
                        <div className="flex gap-6 p-6 relative lg:-top-12  lg:flex-row flex-col lg:overflow-hidden overflow-y-scroll">
                            <div className="flex flex-col lg:gap-10 gap-6">
                                <h2 className="text-5xl font-bold font-title text-center lg:block hidden">
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

                                <p className="text-2xl text-green-500 font-bold">
                                    R$25,00
                                </p>
                                <Button className="text-lg h-14 lg:block hidden">
                                    <p>Saber mais</p>
                                </Button>
                            </div>
                            <Image
                                src={"/galeria1.png"}
                                alt="a"
                                width={500}
                                height={400}
                                className="w-[450px] lg:h-[563px] h-[400px] object-cover rounded "
                            />
                            <Button className="text-lg w-full h-[10rem] py-4 lg:hidden block">
                                <p>Saber mais</p>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
