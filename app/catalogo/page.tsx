import Navbar from "../components/navigation/Navbar";
import Catalogo from "../components/catalogo/catalogo";

export default function Page() {
    return (
        <div>
            <header>
                <Navbar />  
            </header>
            <main>
                <Catalogo />
            </main>
        </div>

    )

}