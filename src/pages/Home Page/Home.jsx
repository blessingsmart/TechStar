import Nav from "./component/nav";
import HeroSection from "./component/HeroSection";
import About from "./component/about";
import Members from "./component/members";
import Event from "./component/event";
import Stack from "./component/stack";
import Login from "../login";



const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <About />
      <Members />
      <Event />
      <Stack />
      <Login />
    </>
  );
};

export default Home;
