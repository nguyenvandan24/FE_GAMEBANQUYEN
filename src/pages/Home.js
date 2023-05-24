import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";

class Home extends React.Component{
    render() {
        const data = {
            name: "DNHCODE"
        };
        return(
            <>
                <HeroSection myData={data} />
                <FeatureProduct />
                <Services />
                <Trusted />
            </>
        );
    }
}


export default Home;