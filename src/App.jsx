

import React,{useState} from 'react'
import Rooms from './components/Rooms'
import RoomDetails from './components/RoomDetails'
import {rooms} from './data.js'
console.log(window.innerWidth);

function App() {


  return (
    <div className=' w-full h-screen  overflow-hidden font-[Anglecia]    '  >
    {/* <div className='bg-[#473d35] min-h-36'> nav bar</div> */}
    
 <div className='w-full h-full'>  <Rooms/>
    </div> 
    {/* <div className='w-full h-full '>
    <RoomDetails selectedRoom={rooms[0]} rooms={rooms} />
    </div> */}
    

    </div>
  )
}

export default App
