import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
function CardView({ products, handleDelete }) {
    const Arr = (size) => {
        const cardarr = [];
        for (let i = 0; i < products.length; i += size) {
            cardarr.push(products.slice(i, i + size));
        }
        return cardarr;
    }
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}

            pagination={{ clickable: true }}
        >
            {
                Arr(6).map((cardarr, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 gap-5 h-210">
                            {cardarr.map((item) => (
                                <div key={item.id} className=" p-4 w-[85%] rounded shadow-2xl  bg-gray-300 flex flex-col justify-between  ">
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-bold mt-2 capitalize ">{item.title}</h2>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="text-red-500 font-bold  rounded-full h-10 px-3 w-10  text-xl hover:border   "
                                        >
                                            X
                                        </button>
                                    </div>
                                    <p className="text-sm mt-1">{item.body}</p>
                                    <p className="font-bold text-gray-400">
                                        {new Date().getDate()}/{new Date().getMonth() + 1}/
                                        {new Date().getFullYear()} {new Date().getHours()}:
                                        {new Date().getMinutes()} GMT
                                    </p>

                                    <img
                                        src={`https://picsum.photos/seed/${item.id}/200/150`}
                                        className="w-full h-30 rounded"
                                    />

                                    {/* <h2 className="text-lg font-bold mt-2">{item.title}</h2> */}
                                    {/* <p className="text-sm mt-1">{item.body}</p> */}

                                   
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>

    );
}

export default CardView;
