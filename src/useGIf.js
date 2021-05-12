import axios from "axios";
import { useEffect, useState } from "react";
const API_KEYY=process.env.REACT_APP_GIPHY_KEY;
const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYY}`;

const useGif = (khoj) => {
    const [gif,setGif]=useState("")
    const fetchGif=async()=>{
        const info=await axios.get(khoj?`${url}&tag=${khoj}` : url);
        const imageSrc=info.data.data.images.downsized_large.url;
        setGif(imageSrc)
        console.log(imageSrc);
    }
    useEffect(()=>{     
        fetchGif(khoj);
    },[khoj])

    return {gif,fetchGif};
}
export default useGif;