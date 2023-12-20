import Image from "next/image";

export default function GalleryCard() {
    return (
        <>
            <div className="lg:w-[24rem]  lg:h-[20rem] w-[10rem] h-[8rem] bg-red-700 overflow-hidden flex items-center justify-center">
                <Image
                    src={"/galeria1.png"}
                    className="object-contain rounded-lg"
                    alt="test"
                    width={400}
                    height={300}
                />
            </div>
        </>
    );
}
