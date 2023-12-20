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
            className="flex  gap-10 justify-center relative"
        >
            <div className="flex w-[80%]  ">
                <div className="w-[50%]">
                    <div className="flex flex-col gap-12 w-[32rem]">
                        <h2 className="text-3xl flex gap-2 font-extrabold">
                            Conheça nosso{" "}
                            <p className="text-green-500">trabalho</p>
                        </h2>
                        <p className=" text-2xl leading-relaxed">
                            Atendemos a ampla região de regiao com dedicação
                            exclusiva. Nossos produtos são cuidadosamente
                            confeccionados à mão, acrescentando um toque
                            especial que faz toda a diferença.
                        </p>
                        <Button>
                            <p>Fazer encomenda</p>
                        </Button>
                    </div>
                </div>
                <div className="  w-[50%] bg-black"></div>
                <Image
                    src={bricks}
                    alt="a"
                    height={200}
                    width={200}
                    className="absolute -bottom-40 h-[100%] -z-10 right-16 "
                />
            </div>
        </section>
    );
}
