import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Linea from "./components/Linea.jsx";
import Waitlist from "./components/Waitlist.jsx";
import ComeScegliamo from "./components/ComeScegliamo.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Linea />
        <Waitlist />
        <ComeScegliamo />
      </main>
      <Footer />
    </>
  );
}
