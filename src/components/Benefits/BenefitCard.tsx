import { ReactNode } from "react";
import { FaStar } from "react-icons/fa";

interface BeneftiCardProps {
    title: string;
    text: string;
    icon: ReactNode;
}

export default function BenefitCard({ icon, text, title }: BeneftiCardProps) {
    return (
        <div className="lg:w-[20rem] w-[20rem] shadow-[_6px_6px_15px_0px_rgba(0,0,0,0.5)] flex flex-col gap-4 lg:h-fit bg-slate-100 rounded-md p-2">
            <div className="rounded-lg bg-green-500 lg:w-10 flex justify-center items-center lg:h-10 h-10 w-10">
                {icon}
            </div>
            <p className="text-lg font-bold">{title}</p>
            <p className="lg:text-md text-sm">{text}</p>
        </div>
    );
}
