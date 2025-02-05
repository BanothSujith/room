import React, { useState } from "react";
import { RxCube } from "react-icons/rx";
import { GiBed } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import CheckAvailability from "./Check-Availability";
import Buttons from "./Buttons";


const details = [
  { icon: RxCube, label: "75 sqm" },
  { icon: GiBed, label: "1 king bed + 2 beds" },
  { icon: MdOutlineGroups, label: "max 4 adults" },
  { icon: IoImageOutline, label: "garden view" },
];


function RoomDetails({ selectedRoom }) {
  
  return (
    <div className="h-full w-full overflow-auto font-[Anglecia]">
      <div className="w-full md:h-full h-1/2">
        <img
          src={selectedRoom.image}
          className="w-full h-full object-fill object-center"
          alt="Room"
        />
      </div>
      <div className="md:py-36 py-10 md:px-16 px-8 flex flex-col md:flex-row  w-full  gap-16 justify-center">
        <div className="md:w-[70%] w-full ">
        <div className="flex flex-wrap  items-center justify-between mb-32  gap-x-32">
          <div >
            <h1 className="mb-8 md:text-7xl text-4xl leading-16 ">Deluxe Suite</h1>
            <div className="text-2xl leading-8 flex flex-wrap gap-8 text-[#8f6f68a8] capitalize">
              {details.map((item, index) => (
                <div className="flex flex-wrap items-center gap-2" key={index}>
                  <span className="text-5xl">
                    <item.icon />
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className=" ">
            <span className="flex flex-col leading-8 py-8 text-2xl">
              <span>From</span>
              <span>
                <span className="text-5xl leading-12">
                  ${selectedRoom.startingPrice}/
                </span>
                <span>night</span>
              </span>
            </span>
            <button className="py-4 px-6 uppercase text-[.875rem] bg-[#bf885e]">
              Book this room
            </button>
          </div>
          
        </div>
          <Buttons/>
          
          
        </div>

        <CheckAvailability selectedRoom={selectedRoom} />

       
      </div>
    </div>
  );
}

export default RoomDetails;
