import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "./cstack";
import NewsPage from "./components/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/pages/:uid" element={<Page />} />
            <Route path="/article/:uid" element={<Article />} />
            <Route path="*" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
