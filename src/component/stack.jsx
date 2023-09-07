import React from 'react'

const Stack = () => {
  return (
    <div className='flex flex-col text-white w-screen p-20'> 
        <div className='flex justify-between items-center'>
           <p>Find your stack and join the legion of creatives</p> 
           <p>See all communities</p> 
        </div>
        <div className='flex gap-5'>
            <div className='flex flex-col gap-5'>
                <div>Product Design</div>
                <div className='flex gap-5'>
                    <div>Front End Jackies</div>
                    <div>JS Gurus</div>
                </div>
            </div>
            <div>Backend Devs</div>
        </div>
    </div>
  )
}

export default Stack