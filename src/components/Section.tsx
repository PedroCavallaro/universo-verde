import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
    children: ReactNode;
    addclass?: string;
}

export default function Section({ children, addclass }: SectionProps) {
    return (
        <section className="flex  gap-10 justify-center relative">
            <div className={twMerge("flex w-[80%]", addclass)}>{children}</div>
        </section>
    );
}
