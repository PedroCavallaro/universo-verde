import Section from "../Section";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
    return (
        <Section addclass="flex-col gap-10">
            <div>
                <h2 className="flex font-extrabold gap-2 text-center lg:text-[32px] text-2xl ">
                    <p className="text-green-500 flex">Relatos</p>
                    <p>dos nossos</p>
                    <p className="hidden lg:block">clientes</p>
                </h2>
                <p className="font-extrabold gap-2  lg:text-[32px] text-2xl block lg:hidden">
                    clientes
                </p>
            </div>
            <div className="flex items-center lg:gap-20 gap-20 lg:flex-row overflow-scroll">
                <div className="flex lg:gap-10 gap-1 h-[33.5rem] w-[65rem]">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </Section>
    );
}
