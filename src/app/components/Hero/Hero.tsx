import Image from "next/image";
import { Button } from "../Button";

export default function Hero() {
    return (
        <section className="flex items-center px-32 h-[45rem]  relative overflow-hidden bg-lime-100  hero-gradient">
            <div className="flex flex-col gap-14">
                <div>
                    <h1 className="text-[5.5rem] flex flex-col font-title text-emerald-600  ">
                        Universo <p>Verde</p>
                    </h1>
                </div>
                <div className="text-[1.3rem]">
                    <h4 className=" flex gap-2 text-2xl">
                        Transforme o ambiente com a{" "}
                        <p className="text-emerald-700">energia</p>
                    </h4>
                    <p className="text-emerald-700">da natureza</p>
                </div>
                <Button>
                    <p>Faça sua encomenda</p>
                </Button>
            </div>

            <div className="">
                <Image
                    src={"/fro2.png"}
                    alt="fro"
                    width={700}
                    height={700}
                    className="absolute -bottom-2 ml-[25rem] "
                />
            </div>
        </section>
    );
}
