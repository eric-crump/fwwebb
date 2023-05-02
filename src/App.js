import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "./cstack";
import NewsPage from "./components/NewsPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Article from "./components/Article";

function App() {
  const [nav, setNav] = useState({});

    async function getNav(){
        let theEntry = await Stack.getElement('bltaf98f2f392b97533', 'nav');
        setNav(theEntry.nav_categories); 
    }

    useEffect(() => {
        onEntryChange(getNav);
    }, []);
    
  return (
    <div>
      <Header nav={nav}/>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<NewsPage />} />
            <Route exact path="/pages/:uid" element={<Page />} />
            <Route exact path="/article/:uid" element={<Article />} />
          </Routes>
        </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
