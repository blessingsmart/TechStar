import React from 'react'
import picture from '../assets/picture.png'
import picture2 from '../assets/picture2.png'
import picture3 from '../assets/picture3.png'
import picture4 from '../assets/picture4.png'
import picture5 from '../assets/picture5.png'
import picture6 from '../assets/picture6.png'
import {BsArrowRight} from 'react-icons/bs'

const Members = () => {

    const member = [
        {
          id: 1,
          src: picture,
          title: "Adegboye Opeyemi",
          content: "UI/UX Designer at microsoft.dreaming.com Nigeria",
        },
        {
            id: 2,
            src: picture2,
            title: "Salaudeen Oluwapelumi",
            content: "Senior Photographer at microsoft.dreaming.com",
        },
        {
          id: 3,
          src: picture3,
          title: "Adegboye Opeyemi",
          content: "UI/UX Designer at microsoft.dreaming.com Nigeria",
        },
        {
            id: 4,
            src: picture4,
            title: "Adegboye Opeyemi",
            content: "UI/UX Designer at microsoft.dreaming.com Nigeria",
        },
        {
            id: 5,
            src: picture5,
            title: "Salaudeen Oluwapelumi",
            content: "Senior Photographer at microsoft.dreaming.com",
        },
        {
            id: 6,
            src: picture6,
            title: "Adegboye Opeyemi ",
            content: "UI/UX Designer at microsoft.dreaming.com Nigeria",
        },
      ];

  return (
    <div className='flex flex-col px-20 py-10 bg-blue-950 h-full w-screen'>
            <div className='flex   gap-20 text-white items-center justify-between'>
                <div className='text-4xl text-right font-semibold'>
                    Meet our community <br /> members and what they do
                </div>
                <div className='text-xs w-2/5 text-center leading-none'>
                Our community members works in a fine company any scale from different part of the world, Congo, Zimbabwe, Uganda, Russia, England, Germany, Netherlands inclusive
                </div>
            </div>
            <div className='items-center flex flex-col'>
                <div className='grid grid-cols-3 gap-y-5 py-10 items-center'>
                    {member.map(({ id, src, title, content }) => (
                        <div
                        key={id}
                        className={`flex flex-col text-center items-center rounded-lg`}
                        >
                        <img src={src} alt="" className="w-4/5" />
                        <p className="items-center mt-2 text-sm font-bold">{title}</p>
                        <p className="items-center text-xs">{content}</p>
                        </div>
                    ))}
                </div>
                <button className='flex items-center bg-white hover:bg-blue-800 rounded-lg w-fit py-2 px-6 text-black text-sm md:text-base'>
                                Join our community <BsArrowRight size={20} className='mx-2'/>
                </button>
            </div>
    </div>
  )
}

export default Members