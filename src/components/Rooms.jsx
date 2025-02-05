import React, { useState } from "react";
import RoomCard from "../cards/RoomCard";
import { rooms } from "../data.js";
import RoomDetails from "./RoomDetails.jsx";

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null); 

  return (
    <div className="overflow-auto w-full h-full">
      {!selectedRoom ? (
        <>
          <div className="bg-[url('https://imgs.search.brave.com/h-8X-ixfQR7eD3X1Lu1b_pRLyULeAAMnjAUUg_08iy8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTMx/MDU3NTUyL3N0b2Nr/LXBob3RvLW1vZGVy/bi1saXZpbmctcm9v/bQ.jpeg')] bg-cover bg-center font-[Anglecia] h-full w-full ">
            <div className="w-full h-full  bg-black/40 px-4 flex flex-col text-center justify-center">
              <h1 className="text-[4rem] leading-16 text-white p-2">
                2 Column Rooms Gallery v2 With Top Filter
              </h1>
              <p className="uppercase text-sm leading-4 tracking-[.25rem] p-2 text-[#dae1d8]">
                Home / 2 Column Rooms Gallery v2 With Top Filter
              </p>
            </div>
          </div>

          <div className="md:py-36">
            <div className="px-2 sm:px-8 md:px-16 w-full flex flex-wrap">
              {rooms.map((room, i) => (
                <div
                  key={i}
                  className="w-full   lg:w-1/2 h-full pt-8 pb-16 px-4" 
                >
                  <RoomCard 
                    room={room} 
                    setSelectedRoom={setSelectedRoom} 
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <RoomDetails selectedRoom={selectedRoom} />
      )}
    </div>
  );
}

export default Rooms;