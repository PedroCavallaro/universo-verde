import bricks from "../../../public/bricks.svg";
import Image from "next/image";
import { Button } from "../Button";
import { MutableRefObject } from "react";
export default function About({
    aboutRef,
}: {
    aboutRef: MutableRefObject<HTMLDivElement | null>;
}) {
    return (
        <section
            ref={aboutRef}
            id="asd"
            className="flex   justify-center relative"
        >
            <div className="flex w-[80%] lg:flex-row  flex-col gap-10 lg:gap-0">
                <div className=" lg:w-[50%]">
                    <div className="flex flex-col lg:gap-12 gap-7 lg:w-[32rem]">
                        <h2 className="lg:text-3xl text-2xl flex gap-2 font-extrabold">
                            Conheça nosso{" "}
                            <p className="text-green-500">trabalho</p>
                        </h2>
                        <p className=" text-md lg:text-2xl leading-relaxed">
                            Atendemos a ampla região de regiao com dedicação
                            exclusiva. Nossos produtos são cuidadosamente
                            confeccionados à mão, acrescentando um toque
                            especial que faz toda a diferença.
                        </p>
                        <Button className="hidden lg:block">
                            <p>Fazer encomenda</p>
                        </Button>
                    </div>
                </div>
                <div className=" lg:h-full h-[15rem] lg:w-[50%] bg-black">
                    <p className="text-white">Video ou foto do trabalho</p>
                </div>
                <Image
                    src={bricks}
                    alt="a"
                    height={200}
                    width={200}
                    className="absolute -bottom-8 w-[150px] h-[150px] -z-10 right-0 lg:right-16 lg:w-[200px] lg:h-[226px] "
                />
                <Button className="block lg:hidden text-lg h-16">
                    <p>Fazer encomenda</p>
                </Button>
            </div>
        </section>
    );
}
