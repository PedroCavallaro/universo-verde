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
    const { aboutRef, contactRef, productRef, handleClick } = useScroll();
    return (
        <>
            <Header handleClick={handleClick} />
            <main className="flex flex-col gap-20">
                <Hero />
                <Products productRef={productRef} />
                <ProductModal />
                <About aboutRef={aboutRef} />
                <Benefits />
                <Reviews />
                <Gallery />
                <Footer />
            </main>
        </>
    );
}
