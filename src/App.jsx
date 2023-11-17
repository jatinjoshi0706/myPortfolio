import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Skillss from "./components/Skillss";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            {/* <AboutMe /> */}
            <Skillss />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
