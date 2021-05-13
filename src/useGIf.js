import axios from "axios";
import { useEffect, useState } from "react";
const API_KEYY=process.env.REACT_APP_GIPHY_KEY;
// const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYY}`;

const useGif = (tag) => {
    const [gif,setGif]=useState("")
    
 
    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYY}&tag=${tag}`;

        const { data } = await axios.get(url);

        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);


    return {gif,fetchGif};
}
export default useGif;