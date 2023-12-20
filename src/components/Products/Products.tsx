import Image from "next/image";
import bricks from "../../../public/bricks.svg";
import ProductRow from "./ProductRow";
import ProductCard from "./ProductCard";
import { MutableRefObject } from "react";

export default function Products({
    productRef,
}: {
    productRef: MutableRefObject<HTMLDivElement | null>;
}) {
    return (
        <section ref={productRef} className="flex flex-col gap-5 ">
            <h2 className="flex font-extrabold gap-2 items-center justify-center text-center text-[32px] ">
                Ultimos <p className="text-emerald-400">produtos</p>
            </h2>
            <div className="relative">
                <Image
                    src={bricks}
                    alt="a"
                    height={200}
                    width={200}
                    className="absolute ml-10 -z-10 -top-5"
                />
            </div>
            <div className="flex flex-col gap-10 ">
                <ProductRow>
                    <ProductCard isBigger={true} />
                    <ProductCard isBigger={false} />
                </ProductRow>
                <ProductRow>
                    <ProductCard isBigger={false} />
                    <ProductCard isBigger={true} />
                </ProductRow>
            </div>
        </section>
    );
}
