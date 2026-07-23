import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import WhatIsStoneUnion from "./components/WhatIsStoneUnion.jsx";
import Market from "./components/Market.jsx";
import Program from "./components/Program.jsx";
import ThirdSpace from "./components/ThirdSpace.jsx";
import GallerySection from "./components/GallerySection.jsx";
import Studio from "./components/Studio.jsx";
import Operations from "./components/Operations.jsx";
import Sustainability from "./components/Sustainability.jsx";
import ConceptGallery from "./components/ConceptGallery.jsx";
import Team from "./components/Team.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <WhatIsStoneUnion />
        <Market />
        <Program />
        <ThirdSpace />
        <GallerySection />
        <Studio />
        <Operations />
        <Sustainability />
        <ConceptGallery />
        <Team />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
