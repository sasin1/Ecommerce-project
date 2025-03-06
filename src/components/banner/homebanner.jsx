import { useState } from "react";
import Carasol from "../carasol";


const homebanner=()=>{

    const [images, setimage]=useState([
        "https://flowbite.com/docs/images/carousel/carousel-1.svg",
        "https://flowbite.com/docs/images/carousel/carousel-2.svg",
        "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        "https://flowbite.com/docs/images/carousel/carousel-4.svg",
        "https://flowbite.com/docs/images/carousel/carousel-5.svg"
      ]);

    return(
        <>
            <Carasol data={images}/>
        </>
    )
}
export default homebanner;