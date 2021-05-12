import {useState } from "react";
import useGif from "../useGIf";
const Random = () => {
    
    const [search,setSearch]=useState("Naruto")
    const {gif,fetchGif}=useGif(search)
  
    const handleClick=()=>{
        fetchGif(search)
    }
    return ( 
        <div>
            <h2>{search}</h2>
            <img width="500" src={gif} alt="Random Gif" />
            <div className="Random-gif">
                <input  value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleClick} >next</button>
            </div>
            
        </div>
       
     );
}
 
export default Random;