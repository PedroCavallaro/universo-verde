import { ScrollEnum } from "@/hooks/useScroll";

export default function Header({
    handleClick,
}: {
    handleClick: (param: ScrollEnum) => void;
}) {
    const scrollTo = (param: ScrollEnum) => {
        handleClick(param);
    };
    return (
        <header className="flex shadow-xl  px-20 h-[100px] gap-28 items-center text-lg bg-lime-100 ">
            <div className="ml-[10rem] flex justify-between w-[80%] px-12">
                <h1>Logo</h1>
                <nav>
                    <ul className="flex gap-4 relative ml-20">
                        <li
                            className="cursor-pointer hover:text-zinc-500 select-none"
                            onClick={() => scrollTo(0)}
                        >
                            Produtos
                        </li>
                        <li
                            className="cursor-pointer hover:text-zinc-500 select-none"
                            onClick={() => scrollTo(1)}
                        >
                            Sobre nós
                        </li>
                        <li
                            className="cursor-pointer hover:text-zinc-500 select-none"
                            onClick={() => scrollTo(2)}
                        >
                            Contato
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
