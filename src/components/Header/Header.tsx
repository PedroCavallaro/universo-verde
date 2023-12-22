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
        <header className="flex shadow-xl  lg:px-20 h-[100px] gap-28 items-center text-lg bg-lime-100 ">
            <div className="lg:ml-[10rem] flex lg:justify-between justify-center items-center w-full gap-2 lg:w-[80%] lg:px-12">
                <h1 className="hidden lg:flex">Logo</h1>
                <nav>
                    <ul className="flex gap-4 relative lg:ml-20">
                        <li
                            className="cursor-pointer hover:text-zinc-500 select-none z-20 "
                            onClick={() => scrollTo(ScrollEnum.produtos)}
                        >
                            Produtos
                        </li>
                        <li
                            className="cursor-pointer hover:text-zinc-500 select-none"
                            onClick={() => scrollTo(ScrollEnum.sobre)}
                        >
                            Sobre nós
                        </li>
                        <li
                            className="cursor-pointer hover:text-zinc-500 select-none"
                            onClick={() => scrollTo(ScrollEnum.contato)}
                        >
                            Galeria
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
