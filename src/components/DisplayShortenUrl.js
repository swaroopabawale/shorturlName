import AcceptUrl from './AcceptUrl/AcceptUrl';
import Headers from './Heders/Heders';
import "../components/DisplayShortenUrl.css"
import { useState } from 'react';
import ShowUrl from './show_url/ShowUrl';
var shortenUrl = require('shorten-url')

function DisplayShortenUrl(){

    const [urlname,setUrl]=useState("");
    const [shorturl,setShortUrl]=useState("");


   const handleChangeUrl= (urltext) => {
       setUrl(urltext);
    }

    const handleShortUrl=()=>{

        var u=shortenUrl(urlname, 30)
        setShortUrl(u);
        console.log("On clik",u);
    }

    return(
        <>
            <Headers/>
            <main className='container'>
            <AcceptUrl 
            url={urlname}
            onUrlChange={handleChangeUrl}
            onShortUrl={handleShortUrl}
            />
            <ShowUrl
            url={shorturl}
            />
            </main>
        </>
    )
}

export default DisplayShortenUrl;