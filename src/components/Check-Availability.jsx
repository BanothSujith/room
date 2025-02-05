import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { Range } from "react-range";

function CheckAvailability({ selectedRoom }) {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDateOpen, setArrivalDateOpen] = useState(false);
  const [departureDateOpen, setDepartureDateOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rangeValues, setRangeValues] = useState([100, 1000]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [isHover,setIsHover] = useState(false);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatDate = (date) => {
    const day = daysOfWeek[date?.getDay()];
    const dateNum = date?.getDate();
    const month = String(date?.getMonth() + 1).padStart(2, "0");
    const year = date?.getFullYear();
    return `${day} ${month}/${dateNum}/${year}`;
  };

  const checkBoxes = [
    "Air Conditioner",
    "Family Friendly",
    "Hair dryer",
    "LCD Television",
    "Minibar",
    "No Smoking",
    "Parking",
    "Pets Allowed",
    "Safe Deposit Box",
  ];

  const handleChecks = (e) => {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      const { name, checked } = e.target;

      setRoomFeatures((prevFeatures) =>
        checked
          ? [...prevFeatures, name]
          : prevFeatures.filter((feature) => feature !== name)
      );
    }
  };

  return (
    <div className="flex flex-col md:w-[30%]  gap-8">
      <div className="bg-[#664831] p-8  h-fit flex gap-4 flex-col">
        <div className="w-full text-[#fffff2] mb-8">
          <h4 className="flex gap-6 text-xl w-full">
            <span className="flex items-center">
              <SlCalender />
            </span>
            <span className="capitalize flex items-center">
              Check Availability
            </span>
          </h4>
        </div>

        <div className="relative w-full">
          <label className="uppercase text-[.825rem] text-[#d4cfcdb9] w-full">
            Arrival Date
          </label>
          <span
            className="flex w-full justify-between items-end relative gap-1 border-b border-white text-white cursor-pointer"
            onClick={() => setArrivalDateOpen(!arrivalDateOpen)}
          >
            {formatDate(arrivalDate)}
            <span>{arrivalDateOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </span>
          <AnimatePresence>
            {arrivalDateOpen && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full z-50 shadow-lg"
                style={{ transformOrigin: "top" }}
              >
                <DatePicker
                  selected={arrivalDate}
                  showPopperArrow={false}
                  onChange={(date) => {
                    setArrivalDate(date);
                    setArrivalDateOpen(false);
                  }}
                  dateFormat="dd-MM-yyyy"
                  minDate={new Date()}
                  inline
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative w-full">
          <label className="uppercase text-[.825rem] text-[#d4cfcdb9] w-full">
            Departure Date
          </label>
          <span
            className="flex w-full justify-between items-end relative gap-1 border-b border-white text-white cursor-pointer"
            onClick={() => setDepartureDateOpen(!departureDateOpen)}
          >
            {formatDate(departureDate)}
            <span>
              {departureDateOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </span>
          <AnimatePresence>
            {departureDateOpen && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full z-50 shadow-lg"
                style={{ transformOrigin: "top" }}
              >
                <div className="w-full flex justify-center">
                  <DatePicker
                    selected={departureDate}
                    showPopperArrow={false}
                    onChange={(date) => {
                      setDepartureDate(date);
                      setDepartureDateOpen(false);
                    }}
                    dateFormat="dd-MM-yyyy"
                    minDate={arrivalDate}
                    inline
                    calendarClassName="full-width-calendar"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative w-full">
          <label className="uppercase text-[.825rem] text-[#d4cfcdb9] w-full">
            Rooms
          </label>
          <span
            className="flex w-full justify-between items-end relative gap-1 border-b border-white text-white cursor-pointer"
            onClick={() => setRoomsOpen(!roomsOpen)}
          >
            {roomCount} Room{roomCount > 1 ? "s" : ""}
            <span>{roomsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </span>
          <AnimatePresence>
            {roomsOpen && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full z-50 shadow-lg"
                style={{ transformOrigin: "top" }}
              >
                <div className="w-full flex flex-col items-center p-2 bg-white text-black">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="cursor-pointer p-1 hover:bg-gray-200 w-full "
                      onClick={() => {
                        setRoomCount(Number(i + 1));
                        setRoomsOpen(false);
                      }}
                    >
                      {`${Number(i + 1)} ${i > 0 ? "Rooms" : "Room"}`}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full ">
          <div className="flex w-full justify-between items-center p-2 border-white">
            <div className=" w-[40%] justify-between text-white">
              <label className="flex w-full justify-between text-white ">
                <span className="text-[#d4cfcdb9] uppercase text-[.825rem]">
                  Adults
                </span>
                <span
                  onClick={() =>
                    setAdults((prev) => (prev >= 4 ? 4 : prev + 1))
                  }
                >
                  <FaChevronUp />
                </span>
              </label>
              <span className="flex w-full justify-between items-end relative gap-1 border-b border-white text-white cursor-pointer">
                {adults}

                <input 
                type="number"
                min={1}
                max={4}
                />
                <span
                  onClick={() =>
                    setAdults((prev) => (prev <= 1 ? 1 : prev - 1))
                  }
                >
                  <FaChevronDown />
                </span>
              </span>
            </div>
            <div className=" w-[40%] justify-between text-white">
              <label className="flex w-full justify-between text-white ">
                <span className="text-[#d4cfcdb9] uppercase text-[.825rem]">
                  Adults
                </span>
                <span
                  onClick={() =>
                    setChildren((prev) => (prev >= 4 ? 4 : prev + 1))
                  }
                >
                  <FaChevronUp />
                </span>
              </label>
              <span className="flex w-full justify-between items-end relative gap-1 border-b border-white text-white cursor-pointer">
                {children}
                <span
                  onClick={() =>
                    setChildren((prev) => (prev <= 0 ? 0 : prev - 1))
                  }
                >
                  <FaChevronDown />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 w-full">
          <label className="uppercase text-[.825rem] text-[#d4cfcdb9] w-full ">
            range{" "}
          </label>
          <Range
  min={0}
  max={1000}
  step={1}
  values={rangeValues}
  onChange={(values) => setRangeValues(values)}
  renderTrack={({ props, children }) => {
    const [min, max] = rangeValues;

    return (
      <div
        {...props}
        className="w-full h-1 rounded-2xl  relative overflow-visible"
        style={{ ...props.style }}
      >
        <div
          className="absolute left-0 top-0 h-full bg-white"
          style={{
            width: `${(min / 1000) * 100}%`,
          }}
        />
        <div
          className="absolute top-0 h-full bg-[#d9945f]"
          style={{
            left: `${(min / 1000) * 100}%`,
            width: `${((max - min) / 1000) * 100}%`,
          }}
        />
        <div
          className="absolute right-0 top-0 h-full bg-white"
          style={{
            width: `${((1000 - max) / 1000) * 100}%`,
          }}
        />
        {children}
      </div>
    );
  }}
  renderThumb={({ props }) => (
    <div
      {...props}
      className="w-4 h-4 bg-[#d9945f] rounded-full border border-[#5A3212] shadow-lg cursor-pointer"
      style={{
        ...props.style,
        transform: "translateY(-50%)", 
        position: "absolute",
      }}
    />
  )}
/>



          <span className="flex w-full justify-between text-white">
            <span>${rangeValues[0]}</span> <span>${rangeValues[1]}</span>
          </span>
        </div>
        {checkBoxes.map((item, i) => (
          <div
            className="relative w-full  text-white"
            key={i}
            onClick={handleChecks}
          >
            <label className="capitalize flex gap-4 justify-baseline items-center text-xl">
              <div className="relative">
                {" "}
                <input
                  type="checkbox"
                  name={item}
                  className="appearance-none h-5  w-5   border-2 border-white  bg-transparent 
          before:content-['✔'] before:absolute before:inset-0 before:flex  before:items-center before:justify-center before:text-white before:opacity-0 checked:before:opacity-100"
                />
              </div>
              {item}
            </label>
          </div>
        ))}
        <button
          className="uppercase w-full bg-[#bf885e] hover:bg-[#d9945f] transition-all duration-75 text-white py-4 "
          onClick={() => console.log(roomFeatures)}
        >
          Check Availability
        </button>
      </div>

      <div
        className={`w-full p-8  bg-cover  hover:bg-right-top `}
        style={{
          backgroundImage: `url(${!isHover ? selectedRoom.image : "https://tse3.mm.bing.net/th?id=OIP.BJCe-jcOGmwdJqWrPAYoegHaE7&pid=Api&P=0&h=180"})`,
          transition: "background-position 0.5s ease",
        }}
      >
     <div
  className="relative w-full flex flex-col items-center justify-center"
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
>
  {/* Animated Wrapper - Expands height when hovered */}
  <div
    className="w-full h-60 bg-[#00000070] flex flex-col justify-center items-center outline border-2 border-white overflow-hidden transition-all duration-75 ease-in "
  >
    {/* Heading */}
    <h3 className="w-full text-center text-5xl leading-14 text-white">
      Offers &
    </h3>
    <h3 className="w-full text-center text-5xl leading-14 text-white">
      Packages
    </h3>

    {/* Button Animation */}
      {isHover && (
        <button
        className="mt-3 py-3 px-6 w-auto bg-[#d8945f] text-white rounded-lg shadow-lg z-50 origin-top hover:scale-105 transition-all"
        >
          Explore More
        </button>
      )}
  </div>
</div>


</div>
</div>
  );
}

export default CheckAvailability;
