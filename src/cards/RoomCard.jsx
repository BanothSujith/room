import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function RoomCard({ room, setSelectedRoom }) {
  const [isHover, setIsHover] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const initialHeight = isMobile ? '' : '15rem'
  const expandHeight = isMobile ? '12rem' : '17rem'
  const displayHover = isDesktop ? isHover : true;

  return (
    <div
      className="w-full h-full relative"
      {...(isDesktop && {
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false)
      })}
    >
      <img 
        src={room.image} 
        className="w-full aspect-square object-fill" 
        alt={room.roomType}
      />

      <motion.div
        className="w-full md:w-[calc(100%-4rem)]  md:pt-10 pt-4  px-4 text-center bg-white shadow-lg static md:absolute md:-bottom-12 md:left-1/2 md:transform md:-translate-x-1/2"
        initial={{ height: initialHeight }}
        animate={{ height: displayHover ? expandHeight : initialHeight }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h4 className="mb-6 md:text-4xl text-2xl">{room.roomType}</h4>
        <div className="flex items-center justify-center gap-1 leading-5">
          <span>From</span>
          <span className="text-3xl">${room.startingPrice}</span>
          <span className="text-3xl">/</span>
          <span>night</span>
        </div>

        <AnimatePresence>
          {displayHover && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0,}}
              animate={{ opacity: 1, }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.3, ease: "easeIn"}}
              className="flex justify-center gap-2 items-center w-full mt-4 uppercase text-white"
            >
              <button className="md:min-w-40 min-w-30 bg-[#d9945f] py-4 px-8 hover:bg-[#c88a4f] transition duration-200">
                Book Now
              </button>
              <button 
                className="md:min-w-40 min-w-30 bg-[#a38c7a] py-4 px-8 hover:bg-[#8f7a6a] transition duration-200"
                onClick={() => setSelectedRoom(room)}
                aria-label={`View details for ${room.roomType}`}
              >
                Details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default RoomCard;
