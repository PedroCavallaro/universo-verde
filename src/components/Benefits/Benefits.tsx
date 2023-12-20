import { benefits } from "@/constants/constants";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
    return (
        <section className="flex  gap-10 justify-center relative flex-wrap">
            <div className="flex flex-col w-[80%] gap-10  ">
                <h2 className="lg:text-3xl text-2xl flex gap-2 font-extrabold">
                    Por que nos
                    <p className="text-green-500">escolher?</p>
                </h2>
                <div className="flex  lg:gap-10 gap-2 flex-col lg:flex-row">
                    {benefits.map(({ icon, text, title }, i) => {
                        return (
                            <BenefitCard
                                key={i}
                                icon={icon}
                                text={text}
                                title={title}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
