import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import ProductModal from "./components/Products/ProductModal";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
    console.log(new Date("2023-12-15T22:05:14.525+00:00").toUTCString());
    return (
        <main className="flex flex-col gap-20">
            <Hero />
            <Products />
            <ProductModal />
            <About />
            <Benefits />
            <Reviews />
            <Gallery />
            <Footer />
        </main>
    );
}
