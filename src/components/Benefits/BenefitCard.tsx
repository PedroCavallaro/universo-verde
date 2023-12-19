import { FaStar } from "react-icons/fa";
export default function BenefitCard() {
    return (
        <div className="w-[20rem] shadow-[_6px_6px_15px_0px_rgba(0,0,0,0.5)] flex flex-col gap-4 bg-slate-100 rounded-md p-2">
            <div className="rounded-lg bg-green-500 w-10 flex justify-center items-center h-10">
                <FaStar color={"#FFFFFF"} size={25} />
            </div>
            <p className="text-lg font-bold">Produtos originais</p>
            <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                enim ratione corrupti atque praesentium
            </p>
        </div>
    );
}
