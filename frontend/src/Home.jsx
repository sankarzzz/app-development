import React from "react";
import Header from "./Components/Header/Header";
import CarouselComponent from "./Components/Carousel/Carousel";
import Grid from "./Components/Grid1/Grid1";
import Events from "./Components/Events/Events";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer1 from "./Components/Footer1/Footer1";
import Footer2 from "./Components/Footer2/Footer2";
import './App.css'
function Home()
{
    return(
        <div>
            <Header></Header>
            <CarouselComponent></CarouselComponent>
            <Grid></Grid>
            <Events></Events>
            <Testimonials></Testimonials>
            <Footer1></Footer1>
            <Footer2></Footer2>
        </div>
    )
}
export default Home;