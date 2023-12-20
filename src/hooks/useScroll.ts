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

    const handleClick = (param: ScrollEnum) => {
        switch (param) {
            case ScrollEnum.produtos:
                productRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case ScrollEnum.contato:
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case ScrollEnum.sobre:
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
        }
    };

    return {
        aboutRef,
        productRef,
        contactRef,
        handleClick,
    };
};
