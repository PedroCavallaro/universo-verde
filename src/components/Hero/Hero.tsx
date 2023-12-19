import Image from "next/image";
import { Button } from "../Button";

export default function Hero() {
    return (
        <section className="flex  justify-center px-32 h-[45rem]   overflow-hidden bg-lime-100  hero-gradient ">
            <div>
                <div className="flex flex-col relative">
                    <h1 className="text-[5.5rem] text-center flex flex-col font-title text-emerald-600 z-10 ">
                        Universo <p>Verde</p>
                    </h1>
                    <div className="flex gap-10">
                        <Image
                            src={"/fro2.png"}
                            alt="hero"
                            width={1000}
                            height={1000}
                            className="ml-[7rem] relative w-[40rem] h-[45rem] -top-[12rem]  "
                        />
                        <div className="mt-10 flex flex-col gap-5 ">
                            <p className="text-lg">
                                Transforme o ambiente com a{" "}
                                <p>energia da natureza</p>
                            </p>
                            <Button className="rounded-full bg-white text-black px-2 text-lg">
                                <p>Faça sua encomenda</p>
                            </Button>
                        </div>
                    </div>
                </div>

                <Image
                    src={"/tl.png"}
                    alt="tl"
                    width={300}
                    height={300}
                    loading="eager"
                    className="absolute top-0 left-0 z-10"
                />
                <Image
                    src={"/fhero1.png"}
                    alt="tl"
                    width={300}
                    height={300}
                    loading="eager"
                    className="absolute -bottom-[3rem] left-0 z-10"
                />
                <Image
                    src={"/tr.png"}
                    alt="tl"
                    width={200}
                    height={200}
                    loading="eager"
                    className="absolute  top-0 right-0 z-10"
                />
                <Image
                    src={"/br.png"}
                    alt="tl"
                    width={400}
                    height={400}
                    loading="eager"
                    className="absolute -bottom-[20rem] right-0 z-10"
                />
            </div>
        </section>
    );
}
//  <div className="flex flex-col gap-14">
//                 <div>
//                     <h1 className="text-[5.5rem] flex flex-col font-title text-emerald-600  ">
//                         Universo <p>Verde</p>
//                     </h1>
//                 </div>
//                 <div className="text-[1.3rem]">
//                     <h4 className=" flex gap-2 text-2xl">
//                         Transforme o ambiente com a{" "}
//                         <p className="text-emerald-700">energia</p>
//                     </h4>
//                     <p className="text-emerald-700">da natureza</p>
//                 </div>
//                 <Button>
//                     <p>Faça sua encomenda</p>
//                 </Button>
//             </div>

//             <div className="">
//                 <Image
//                     src={"/fro2.png"}
//                     alt="fro"
//                     width={700}
//                     height={700}
//                     className="absolute -bottom-2 ml-[25rem] "
//                 />
//             </div>
