"use client";
import { Carousel } from "flowbite-react";

function carasol({data}) {
  return (
    <div className="h-[650px] w-full">
      <Carousel>
        {
        data.map((row, i) => (
          <a key={row}>
          <img src={data[i]} alt="Slides" className="w-full" />
          </a>
        ))
        }
      </Carousel>
    </div>
  );
}

export default carasol;
