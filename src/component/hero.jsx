import React from "react";
import {BsArrowRight} from 'react-icons/bs'
import AutoScrollList from './autoScrollList';

const Hero = () => {

    

    return (
        <>
        <div className="flex flex-col mx-auto h-screen w-screen bg-no-repeat bg-center bg-[url('/Star.png')] ">
            <div className=" flex flex-col items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-400/75 to-blue-400 md:px-48 pt-10 px-10 h-full">
                    <div className="text-blue-950 text-4xl md:text-7xl font-semibold leading-snug">
                    Welcome to the world of stars: Your hub for <span className="text-white">tech connections</span>.
                    </div>
                    <div className=" md:text-xl text-blue-950 font-bold py-16">
                        <span className="text-emerald-600">Connect</span>.
                        <span className="text-white">Collaborate</span>.
                        <span className="text-lime-400">Create</span>.
                    </div>
                    <button className='flex items-center bg-blue-950 hover:bg-blue-800 rounded-lg w-fit py-2 px-6 text-white text-sm md:text-base'>
                        Join our community <BsArrowRight size={20} className='mx-2'/>
                    </button>
            </div>
            <AutoScrollList />
        </div>
        </>
    );
};

export default Hero;
