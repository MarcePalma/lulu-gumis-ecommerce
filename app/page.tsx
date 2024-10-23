import Navbar from "./components/navigation/Navbar";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";

export default function Home() {

  return (
    <div>
      <header>

        <Navbar />

      </header>
      <main>

        <Main />

      </main>
      <footer>

        <Footer />

      </footer>
    </div>
  );
}
