import Hero from "./Hero";
import SectionHeading from "./SectionHeading";
import News from "./News";
import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "../cstack";

function NewsPage() {
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElementWithRefs('blt4f03ea67696638e6', 'news_page', ['news.reference']);
        //console.log('entry', theEntry);
        setEntry(theEntry); 
    }

    useEffect(() => {
        onEntryChange(getEntry);
    }, []);

    return (
        <div>
            <div class="container-fluid">
                <div class="container-xl container-lg container-fluid-sm mt-2 mb-3">
                    <Hero settings={entry.hero}/>
                    <SectionHeading entry={entry} />
                    <News articles={entry.news?.reference}/>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;