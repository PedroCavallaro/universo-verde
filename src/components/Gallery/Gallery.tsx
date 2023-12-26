import { MutableRefObject } from "react";
import Section from "../Section";
import GalleryCard from "./GalleryCard";
import { Button } from "../Button";
import Link from "next/link";

export default function Gallery({
    galleryRef,
}: {
    galleryRef: MutableRefObject<HTMLDivElement | null>;
}) {
    return (
        <Section addclass="flex-col lg:gap-10 gap-4">
            <h2
                ref={galleryRef}
                className="lg:text-3xl text-2xl flex lg:flex-row flex-col gap-2 font-extrabold"
            >
                Veja mais no nosso
                <p className="text-green-500">Instagram</p>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:gap-10 gap-2 gap-y-2">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
            <div className="flex justify-end">
                <Link
                    href={"https://www.instagram.com/universoverde.bp/"}
                    className="rounded-full flex gap-2 justify-center items-center h-10 px-2 bg-white text-black  text-lg hover:bg-emerald-400 hover:text-white transition-all"
                >
                    <p>Ver mais</p>
                    <p>{"->"}</p>
                </Link>
            </div>
        </Section>
    );
}
