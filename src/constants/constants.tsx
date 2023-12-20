import { ReactNode } from "react";
import { FaShippingFast, FaStar } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";

type BeneftiCard = {
    title: string;
    text: string;
    icon: ReactNode;
};
export const benefits: Array<BeneftiCard> = [
    {
        title: "Produtos originais",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, enim ratione corrupti atque praesentium",
        icon: <FaStar color={"#FFFFFF"} size={20} />,
    },
    {
        title: "Entrega segura",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, enim ratione corrupti atque praesentium",
        icon: <FaShippingFast color={"#FFFFFF"} size={20} />,
    },
    {
        title: "Contato direto",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, enim ratione corrupti atque praesentium",
        icon: <GiTalk color={"#FFFFFF"} size={20} />,
    },
];
