import Section from "../Section";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
    return (
        <Section addclass="flex-col gap-10">
            <h2 className="text-3xl flex gap-2 font-extrabold">
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
            <button className="text-right text-2xl justify-end flex gap-2">
                <p>Ver mais</p>
                <p>{"->"}</p>
            </button>
        </Section>
    );
}
