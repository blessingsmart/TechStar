import React from 'react'
import Community from '../assets/community.png'
import Smiling from '../assets/smiling.png'
import {BsArrowRight} from 'react-icons/bs'

const About = () => {

    const niche = [
        {
          id: 1,
          src: Community,
          title: "Networking and Connections",
          content: "Connect with fellow tech enthusiasts, and gain insights from experienced experts through our mentorship sessions, where you can learn from the best in the industry.",
        },
        {
            id: 2,
            src: Community,
            title: "Community Hangouts",
            content: "Connect with fellow tech enthusiasts, and gain insights from experienced experts through our mentorship sessions, where you can learn from the best in the industry.",
        },
        {
          id: 3,
          src: Community,
          title: "Networking and Connections",
          content: "Connect with fellow tech enthusiasts, and gain insights from experienced experts through our mentorship sessions, where you can learn from the best in the industry.",
        },
        {
            id: 4,
            src: Community,
            title: "Opportunities & Resources",
            content: "Find your next gig, work, certification, or fellowship. We share opportunities and resources amongst ourselves for career and life growth.",
        },
        {
            id: 5,
            src: Community,
            title: "Opportunities & Resources",
            content: "Find your next gig, work, certification, or fellowship. We share opportunities and resources amongst ourselves for career and life growth.",
        },
        {
            id: 6,
            src: Community,
            title: "Community Hangouts ",
            content: "Connect with fellow tech enthusiasts, and gain insights from experienced experts through our mentorship sessions, where you can learn from the best in the industry.",
        },
      ];
    

  return (
    <>
    <div className='flex flex-col px-20 h-full w-screen'>
        <div className='flex flex-col py-10'>
            <div className='text-black text-5xl font-semibold py-20'>
                <span className='bg-indigo-50 mt-10'>What we do at</span><br/> tech star. <span className='text-xs font-semibold leading-none'>More than connecting tech enthusiasts</span>
            </div>
            <div className='grid grid-cols-3 gap-x-7 gap-y-16'>
                {niche.map(({ id, src, title, content }) => (
                    <div
                    key={id}
                    className={`bg-indigo-50 flex flex-col px-5 pb-10 text-center items-center  justify-center py-2 rounded-lg`}
                    >
                    <img src={src} alt="" className="w-10" />
                    <p className="mt-4 items-center text-sm font-bold">{title}</p>
                    <p className="mt-4 items-center text-xs">{content}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='grid grid-cols-2 justify-between gap-32 items-center mx-28'>
            <img src={Smiling} alt="" className="h-4/5 w-4/5" />
            <div className='flex flex-col h-80 py-10 justify-between'>
                    <p className='text-4xl font-semibold leading-tight'>We are here for you, your growth is something we do care about.</p>
                    <button className='flex items-center bg-blue-950 hover:bg-blue-800 rounded-lg w-fit py-2 px-6 text-white text-sm md:text-base'>
                            Join our community <BsArrowRight size={20} className='mx-2'/>
                    </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default About