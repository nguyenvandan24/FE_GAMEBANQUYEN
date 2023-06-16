import React, {useEffect} from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";
import {useNavigate} from "react-router-dom";

const Home=()=>{
    const data = {
        name: "DNHCODE"
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
                <HeroSection myData={data} />
                <FeatureProduct />
                <Services />
                <Trusted />
            </>
        );
    }



export default Home;