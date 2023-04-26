import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "../cstack";

function Page(){
    const { type, uid } = useParams();
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElement(uid, type);
        console.log('page entry', theEntry);
        setEntry(theEntry); 
    }

    useEffect(() => {
        onEntryChange(getEntry);
    }, []);

    return(
        <div>
            Page {type} {uid}
        </div>
    )
}

export default Page;