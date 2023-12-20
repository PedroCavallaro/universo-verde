import { MutableRefObject, useRef } from "react";

export enum ScrollEnum {
    "produtos",
    "sobre",
    "contato",
}
export const useScroll = () => {
    const aboutRef = useRef<null | HTMLDivElement>(null);
    const productRef = useRef<null | HTMLDivElement>(null);
    const contactRef = useRef<null | HTMLDivElement>(null);

    const scrollFunctions = {
        "0": () => productRef.current?.scrollIntoView({ behavior: "smooth" }),
        "1": () => contactRef.current?.scrollIntoView({ behavior: "smooth" }),
        "2": () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
    };
    const handleClick = (param: ScrollEnum) => {
        return scrollFunctions[param]();
    };

    return {
        aboutRef,
        productRef,
        contactRef,
        handleClick,
    };
};
