import { ReactNode } from "react";

export default function ProductRow({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-center">
            <div className="flex w-[80%] lg:gap-10 gap-5">{children}</div>
        </div>
    );
}
