import React, {useEffect} from "react";
import HeroSection from "../components/HeroSection";
import {useProductContext} from "../context/productcontext";
import {useNavigate} from "react-router-dom";

const About = () =>{
    const {myName} = useProductContext();

    const data = {
        name: "DNHCODE ABOUT"
    };
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/Login');

        }

    }, []);
    return(
        <>
            {myName}
            <HeroSection myData={data} />
        </>

    );
};

export default About;