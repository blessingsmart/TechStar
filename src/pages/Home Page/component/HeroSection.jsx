import heroimg1 from "../../../../src/assets/heroimg1.svg";
import heroimg2 from "../../../../src/assets/heroimg2.svg";
import heroimg3 from "../../../../src/assets/heroimg3.svg";
import heroimg4 from "../../../../src/assets/heroimg4.svg";

const HeroSection = () => {
  return (
    <>
      <div className="relative top-[10vh] lg:flex lg:gap-[1vw] justify-around py-[6vh]">
        <div className="text-center lg:text-left max-[1024px]:px-[5vw]">
          <h1
            className='text-[#001E50] text-2xl md:text-2xl mt-[8vh] lg:mt-[11vh] lg:text-[9vh] 
           font-["Nunito/ Sans"] font-bold lg:leading-[11vh]'
          >
            Building a <br className="hidden lg:block"/> community for <br className="md:hidden lg:block"/>
            <span className="text-transparent bg-gradient-to-r from-[#43FFA4] to-[#0FB0F7] bg-clip-text">
              tech Enthusiast
            </span>
          </h1>
          <h3 className="font-bold tracking-wide text-lg mt-[4vh]">
            Connect
            <span
              className="text-transparent bg-gradient-to-r from-[#43FFA4] 
            to-[#0FB0F7] bg-clip-text"
            >
              {" "}
              &nbsp;&#9864;
            </span>{" "}
            Build
            <span
              className="text-transparent bg-gradient-to-r from-[#43FFA4]
             to-[#0FB0F7] bg-clip-text"
            >
              {" "}
              &nbsp;&#9864;
            </span>{" "}
            Grow
            <span
              className="text-transparent bg-gradient-to-r from-[#43FFA4]
              to-[#0FB0F7] bg-clip-text"
            >
              {" "}
              &nbsp; &#9864;
            </span>
          </h3>
          <button className="bg-[#001E50] w-['auto'] px-[2vw] py-[2vh] my-[4vh] text-white rounded-lg md:mb-[8vh]">
            Join Our Community
          </button>
        </div>
        <div className="grid grid-cols-2 mx-[10vw] md:mx-[10vw]max-[1024px]:mr-[4vw]">
          <img
            src={heroimg1}
            alt=""
            className="hover:scale-[1.1] transition-all duration-100 
          ease-in-out delay-100 hover:translate-y-2 "
          />
          <img
            src={heroimg2}
            alt=""
            className="rounded-lg relative bottom-[2vh] hover:scale-[1.1] transition-all duration-100 
            ease-in-out delay-100 hover:translate-y-2"
          />
          <img
            src={heroimg3}
            alt=""
            className="hover:scale-[1.1] transition-all duration-100 
          ease-in-out delay-100 hover:translate-y-2"
          />
          <img src={heroimg4} alt="" className="pt-[2vh] hover:scale-[1.1] transition-all duration-100 
          ease-in-out delay-100 hover:translate-y-2" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
