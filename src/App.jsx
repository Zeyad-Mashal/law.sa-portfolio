import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const whatsappPrimary = "966574000016";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappPrimary}`}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل واتساب"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;
