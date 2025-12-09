import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {  Pagination } from "swiper/modules";

function TableView({ products, handleDelete }) {
  const Arr = (size) => {
    const part = [];
    for (let i = 0; i < products.length; i += size) {
      part.push(products.slice(i, i + size));
    }
    return part;
  };

  return (
    <Swiper
      modules={[ Pagination]} 
      spaceBetween={20}
      slidesPerView={1} 
      
      pagination={{ clickable: true }}
    >
      {Arr( 6).map((part, index) => (
        <SwiperSlide key={index}>
          
          <div className="flex flex-col gap-10">
            {part.map((item) => (
              <>
              <div className="flex gap-3 ">
            <div>
              <div
                key={item.id}
                className="shadow-2xl rounded-2xl bg-gray-200 flex gap-3 p-4 overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/seed/${item.id}/50/50`}
                  className="shadow-2xl rounded-full h-20 w-20"
                  alt="thumb"
                />
                <div>
                  <p className="w-fit overflow-hidden font-bold capitalize">{item.title}</p>
                  <p className="overflow-hidden">{item.body}</p>
                  <p className="font-bold text-gray-400">
                    {new Date().getDate()}/{new Date().getMonth() + 1}/
                    {new Date().getFullYear()} {new Date().getHours()}:
                    {new Date().getMinutes()} GMT
                  </p>
                 
                </div>
              </div>
              </div>
               <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-white text-red-600  rounded-full h-10 px-3 w-10 my-auto text-xl  "
                  >
                 X
                  </button>
                  </div>
                  </>

            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TableView;
