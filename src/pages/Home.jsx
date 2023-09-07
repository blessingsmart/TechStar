import React from "react";
import Nav from "../component/nav";
import Hero from "../component/hero";
import About from "../component/about";
import Members from "../component/members";
import Event from "../component/event";
import Stack from "../component/stack";

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Members />
            <Event />
            <Stack />
         </>
    );
};

export default Home;
