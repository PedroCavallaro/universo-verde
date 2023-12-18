import Section from "../Section";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
    return (
        <Section addclass="flex-col gap-10">
            <h2 className="flex font-extrabold gap-2 text-center text-[32px] ">
                <p className="text-green-500">Relatos</p> dos nossos clientes
            </h2>
            <div className="flex items-center justify-center gap-20">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </Section>
    );
}
