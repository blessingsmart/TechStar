import heroimg1 from "../../../src/assets/heroimg1.svg";
import heroimg2 from "../../../src/assets/heroimg2.svg";
import heroimg3 from "../../../src/assets/heroimg3.svg";
import heroimg4 from "../../../src/assets/heroimg4.svg";

const HeroSection = () => {
  return (
    <>
      <div className="relative top-[10vh] lg:flex lg:gap-[1vw] justify-around py-[6vh]">
        <div>
          <h1
            className='text-[#001E50] lg:mt-[11vh] lg:text-[8vh] 
           font-["Nunito/ Sans"] font-bold'
          >
            Building a <br /> community for <br />
            <span className="text-transparent bg-gradient-to-r from-[#43FFA4] to-[#0FB0F7] bg-clip-text">
              tech Enthusiast
            </span>
          </h1>
          <h3 className="font-bold tracking-wide text-lg mt-[3vh]">
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
          <button className="bg-[#001E50] w-['auto'] px-[2vw] py-[2vh] mt-[4vh] text-white rounded-lg">
            Join Our Community
          </button>
        </div>
        <div className="grid grid-cols-2">
          <img
            src={heroimg1}
            alt=""
            className="hover:scale-[1.1] transition-all duration-100 
          ease-in-out delay-100 hover:translate-y-2"
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
