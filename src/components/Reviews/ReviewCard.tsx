import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
export default function ReviewCard() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center  gap-2 px-10 mt-10 h-[30rem] w-[20rem] bg-lime-100 rounded-tl-[3rem] rounded-br-[3rem]">
                <p className="lg:text-xl text-sm mt-20 text-black">Nome</p>
                <p>
                    {`" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt accusamus dicta facilis rerum, ipsam voluptatem nisi id obcaecati maxime, dolores molestias. Totam ipsum animi fuga aspernatur quis voluptate excepturi impedit?
        Repellat quo itatis s ducimus optio eum? Corporis, deleniti aliquid
                "`}
                </p>
                <div className="flex items-center gap-2 justify-start">
                    <FaHouse />
                    <p>Bragança Paulista</p>
                </div>
                <div className="bg-red-500 w-32 h-32 absolute mx-auto -top-10 rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden">
                    <Image src={"/icone.png"} alt="" width={200} height={200} />
                </div>
            </div>
        </>
    );
}
