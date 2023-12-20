"use client";
import About from "../components/About/About";
import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import ProductModal from "../components/Products/ProductModal";
import Products from "../components/Products/Products";
import Reviews from "../components/Reviews/Reviews";
import Header from "../components/Header/Header";
import { useScroll } from "@/hooks/useScroll";

export default function Home() {
    const {
        aboutRef,
        contactRef: galleryRef,
        productRef,
        handleClick,
    } = useScroll();
    return (
        <>
            <Header handleClick={handleClick} />
            <main className="flex flex-col lg:gap-20 gap-12 overflow-hidden">
                <Hero />
                <Products productRef={productRef} />
                <ProductModal />
                <About aboutRef={aboutRef} />
                <Benefits />
                <Reviews />
                <Gallery galleryRef={galleryRef} />
                <Footer />
            </main>
        </>
    );
}
