import BenefitCard from "./BenefitCard";

export default function Benefits() {
    return (
        <section className="flex  gap-10 justify-center relative">
            <div className="flex flex-col w-[80%] gap-10  ">
                <h2 className="text-3xl flex gap-2 font-extrabold">
                    Por que nos
                    <p className="text-green-500">escolher?</p>
                </h2>
                <div className="flex gap-10">
                    <BenefitCard />
                    <BenefitCard />
                    <BenefitCard />
                    <BenefitCard />
                </div>
            </div>
        </section>
    );
}
