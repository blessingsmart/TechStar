import React from 'react'
import Nav from '../component/nav'
import FigmaIcon from '/images/figma.png'
import Git from '/images/git.jpg'
import Gmail from '/images/gmail.png'
import {BsArrowRight} from 'react-icons/bs'

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between text-black bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-400">
      <Nav />
      <div className='flex flex-col m-44 bg-white items-center '>
        <div>It feels good to have you back 
          <br /><span>Let the colabo continue ......</span>
          </div>
        <div className='flex p-5'>
              <div className='flex'>
                <div className='flex items-center gap-10 flex-col'>
                  <div> <img src={FigmaIcon} alt="" /></div>
                  <div><img src={Git} alt="" /></div>
                  <div><img src={Gmail} alt="" /></div>
                </div>
                <div className='flex items-center gap-10 flex-col px-5'>
                  <div className='flex'> sign in with figma</div>
                  <div className='flex'>sign in with Github</div>
                  <div className='flex'>sign in with google</div>
                </div>
              </div>
          <div className='flex gap-10 flex-col'>
            <label htmlFor="Email" className=" text-lg">Email Address</label> 
            <input type="text"
                   placeholder="Enter your email address"
                   className=" border focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300" />
            <label htmlFor="Password" className=" text-lg">PassWord</label> 
            <input type="Password"
                   placeholder="Enter your Password here"
                   className=" border focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300" />
            <button className='flex items-center bg-blue-950 hover:bg-blue-800 rounded-lg w-fit py-2 px-6 text-white text-sm md:text-base'>
                        Join our community <BsArrowRight size={20} className='mx-2'/>
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Login