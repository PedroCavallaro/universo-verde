export default function Header() {
    return (
        <header className="flex shadow-xl  px-20 h-[100px] gap-28 items-center text-lg bg-lime-100 ">
            <div className="flex justify-between w-full px-12">
                <h1>Logo</h1>
                <nav>
                    <ul className="flex gap-4 relative ml-20">
                        <li>Produtos</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
