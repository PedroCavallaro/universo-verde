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
                    <div className="flex flex-col-reverse lg:flex-row gap-10">
                        <Image
                            src={"/fro2.png"}
                            alt="hero"
                            width={1000}
                            height={1000}
                            className="lg:ml-[7rem] relative lg:w-[40rem] lg:h-[45rem] bottom-[8rem] lg:-top-[12rem] sm:w-[5rem] sm:h-[5rem]   "
                        />
                        <div className="mt-10 flex flex-col items-center gap-5 ">
                            <h2 className="text-lg text-center">
                                Transforme o ambiente com a{" "}
                                <span className="flex gap-[0.3rem] items-center justify-center ">
                                    <p className="">energia da </p>
                                    <p className="text-emerald-400">natureza</p>
                                </span>
                            </h2>
                            <Button className="rounded-full bg-white text-black px-2 text-lg hover:bg-emerald-400 hover:text-white transition-all z-10">
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
                    draggable={false}
                    className="absolute lg:w-[300px] lg:h-[380px] top-0 left-0 lg:z-10 w-[9rem] h-[9rem]"
                />
                <Image
                    src={"/fhero1.png"}
                    alt="tl"
                    width={300}
                    height={300}
                    loading="eager"
                    draggable={false}
                    className="absolute hidden lg:flex lg:w-[300px] lg:h-[726.16px] lg:object-fill lg:-bottom-[3rem]  left-0 z-10 w-[15rem] h-[20rem]"
                />
                <Image
                    src={"/tr.png"}
                    alt="tl"
                    width={200}
                    height={200}
                    loading="eager"
                    draggable={false}
                    className="absolute   lg:w-[200px] lg:h-[550px] lg:top-0 top-[5.5rem] right-0 lg:z-10 w-[9rem] h-[550px] -z-0"
                />
                <Image
                    src={"/br.png"}
                    alt="tl"
                    width={400}
                    height={400}
                    loading="eager"
                    draggable={false}
                    className="absolute hidden lg:flex lg:w-[375px] lg:h-[700px] -bottom-[15rem] right-0 z-10 h-2 w-2"
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
