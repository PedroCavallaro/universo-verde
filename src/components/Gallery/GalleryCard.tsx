import Image from "next/image";

export default function GalleryCard() {
    return (
        <>
            <div className="w-[24rem] h-[20rem] bg-red-700 overflow-hidden flex items-center justify-center">
                <Image
                    src={"/galeria1.png"}
                    className="object-contain"
                    alt="test"
                    width={400}
                    height={300}
                />
            </div>
        </>
    );
}
