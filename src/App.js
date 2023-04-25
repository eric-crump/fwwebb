import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div class="container-fluid">
        <div class="container-xl container-lg container-fluid-sm mt-2 mb-3">
          <Hero />
          <SectionHeading />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
