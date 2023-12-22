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
        text: "Garantimos a você uma experiência única, marcada pela qualidade inigualável, durabilidade e confiabilidade que apenas itens genuínos podem proporcionar",
        icon: <FaStar color={"#FFFFFF"} size={20} />,
    },
    {
        title: "Entrega segura",
        text: "Porque reconhecemos a importância de seu pedido e nos comprometemos a garantir que ele chegue até você com cuidado e integridade.",
        icon: <FaShippingFast color={"#FFFFFF"} size={20} />,
    },
    {
        title: "Contato direto com o vendedor",
        text: "Porque valorizamos a proximidade e a transparência em nossa relação com você. Estamos sempre disponíveis para esclarecer dúvidas ou oferecer informações adicionais",
        icon: <GiTalk color={"#FFFFFF"} size={20} />,
    },
];
