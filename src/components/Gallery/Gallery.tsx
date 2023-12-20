import { MutableRefObject } from "react";
import Section from "../Section";
import GalleryCard from "./GalleryCard";
import { Button } from "../Button";

export default function Gallery({
    galleryRef,
}: {
    galleryRef: MutableRefObject<HTMLDivElement | null>;
}) {
    return (
        <Section addclass="flex-col gap-10">
            <h2 ref={galleryRef} className="text-3xl flex gap-2 font-extrabold">
                Veja mais no nosso
                <p className="text-green-500">Instagram</p>
            </h2>

            <div className="flex flex-wrap gap-10">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
            <div className="flex justify-end">
                <Button className="rounded-full flex gap-2 justify-center items-center h-10 px-2 bg-white text-black  text-lg hover:bg-emerald-400 hover:text-white transition-all">
                    <p>Ver mais</p>
                    <p>{"->"}</p>
                </Button>
            </div>
        </Section>
    );
}
