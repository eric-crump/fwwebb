import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "../cstack";
import { format, parseISO } from 'date-fns';

function Article(){
    const { type, uid } = useParams();
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElement(uid, 'article');
        //console.log('article entry', theEntry);
        setEntry(theEntry); 
    }

    useEffect(() => {
        onEntryChange(getEntry);
    }, []);

    if(Object.keys(entry).length === 0)
        return <div />

    let img;
    if(entry.article_image?.url)
        img = <img src={entry.article_image?.url} height="232" {...entry.article_image?.$.url}/>;

    return(
        <div className="container">
            <p className="red no-margin" {...entry.$.type}>{entry.type}</p>
            <p {...entry.$.date}>{format(parseISO(entry.date), 'MMMM dd, yyyy')}</p>
            <h1 {...entry.$.title}>{entry.title}</h1>
            {img}
            <div dangerouslySetInnerHTML={{__html: entry.body}} {...entry.$.body}></div>
            <h2>About F.W. Webb</h2>
      <p>An industry pioneer since 1866, F.W. Webb Company is the largest wholesale distributor of plumbing, heating, HVAC, LP gas, refrigeration, pipe, valves and fittings in the Northeast. F.W. Webb has grown from a single location to more than 100 across nine states and proudly offers customers an extensive inventory of products and dedicated services that reach from underground to the rooftop. Covering 16 areas of expertise, specialty markets include process controls, water works, environmental services and more. F.W. Webb also operates 48 Frank Webb Home bath, kitchen and lighting retail showrooms. For more information visit <a href="/">fwwebb.com</a>. Media contact: <a href="mailto:media@fwwebb.com">media@fwwebb.com</a>.</p>
      <div class="my-2"><a class="mb-3"href="/" >&#8592; Return to News Center</a></div>
        </div>
    )
}

export default Article;