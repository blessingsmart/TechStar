import React from 'react'
import Product from "/images/Product-design.png"
import Js from "/images/js.png"
import Backend from "/images/Backend.png"
import Frontend from "/images/Front-end.png"

const Stack = () => {
  return (
    <div className='flex flex-col  w-screen p-20'> 
        <div className='flex justify-between items-center'>
           <p>Find your stack and join the legion of creatives</p> 
           <p>See all communities</p> 
        </div>
        <div className='flex text-white gap-5'>
            <div className='flex flex-col gap-5'>
                <div className=" flex ">
                  <img src={Product} alt="" /></div>
                <div className='flex gap-5 '>
                    <div className="">
                      <img src={Frontend} alt="" /></div>
                    <div className="">
                      <img src={Js} alt="" /></div>
                </div>
            </div>
            <div className="">
              <img src={Backend} alt="" /></div>
        </div>
    </div>
  )
}

export default Stack