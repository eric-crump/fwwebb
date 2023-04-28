import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "../cstack";
import HeroBanner from "./HeroBanner";
import ProductGallery from "./ProductGallery";

function Page(){
    const { type, uid } = useParams();
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElement(uid, 'page');
        console.log('page entry', theEntry);
        setEntry(theEntry); 
    }

    useEffect(() => {
        onEntryChange(getEntry);
    }, []);

    let blocks = [];
    entry.modular_blocks?.forEach(item => {
        if(item.hasOwnProperty('paragraph')){
            let title;
            if(item.paragraph.title != "")
                title = <p className="mb-3 text-center display-6" {...item.paragraph?.$?.title}>{item.paragraph.title}</p>
            if(item.paragraph.image !== null){
                blocks.push(
                    <div className="container mt-3">
                        {title}
                        <img width="250" src={item.paragraph.image.url} className="mx-auto d-flex float-start pe-2 pt-1" key={item.paragraph.image?.uid} {...item.paragraph.image?.$?.url}></img>
                        <div dangerouslySetInnerHTML={{__html: item.paragraph.body}} {...item.paragraph?.$?.body}></div>
                    </div>
                );
            }
            else{
                blocks.push(
                    <div className="container mt-3">
                        {title}
                        <div dangerouslySetInnerHTML={{__html: item.paragraph.body}} {...item.paragraph?.$?.body}></div>
                    </div>
                )
            }
        }
        else if(item.hasOwnProperty('hero')){
            blocks.push(<HeroBanner banner={item.hero} key={item.hero._metadata?.uid}/>);
        }
        else if(item.hasOwnProperty('product_selector')){
            
            blocks.push(<ProductGallery products={item.product_selector.product_selector.products} preview={item.product_selector?._metadata?.$?.uid} key={item.product_selector._metadata?.uid} />)
        }
    })

    return(
        <div>
            {blocks}
        </div>
    )
}

export default Page;