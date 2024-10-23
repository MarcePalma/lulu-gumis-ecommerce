import Navbar from "../components/navigation/Navbar";
import SubNavbar from "../components/catalogo/subnavbar";
import Catalogo from "../components/catalogo/catalogo";

export default function Page() {
    return (
        <div>
            <header>
                <Navbar />
                <section className="py-20 mt-10">
                    <SubNavbar />
                </section>
            </header>

            <main>
                <Catalogo />
            </main>
        </div>

    )

}