import React from 'react'
import event1 from '/images/image-6.png'
import {BsArrowRight} from 'react-icons/bs'

const Event = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center w-screen p-20'>
        <div>
            Latest event happening
        </div>
        <div className='flex gap-20'>
            <div className='flex'>
                <img src={event1} alt="" />
                <dir className="flex flex-col text-left">
                    <div>
                        <p>Event Name</p>
                        <p>Creative Hangout</p>
                    </div>
                    <div>
                        <p>Venue</p>
                        <p>Twitter Space</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>March 28, 2023</p>
                    </div>
                    <div>
                        <p>Host</p>
                        <p>Teshstar</p>
                    </div>
                        <div>
                            <p>RSVP</p>
                        </div>
                </dir>
            </div>
            <div className='flex'>
                <img src={event1} alt="" />
                <dir className="flex flex-col text-left">
                    <div>
                        <p>Event Name</p>
                        <p>Creative Hangout</p>
                    </div>
                    <div>
                        <p>Venue</p>
                        <p>Twitter Space</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>March 28, 2023</p>
                    </div>
                    <div>
                        <p>Host</p>
                        <p>Teshstar</p>
                    </div>
                        <div>
                            <p>Add to calender</p>
                        </div>
                </dir>
            </div>
        </div>
        <button className='flex items-center bg-blue-950 hover:bg-blue-800 rounded-lg w-fit py-2 px-6 text-black text-sm md:text-base'>
                View all events <BsArrowRight size={20} className='mx-2'/>
        </button>
    </div>
  )
}

export default Event