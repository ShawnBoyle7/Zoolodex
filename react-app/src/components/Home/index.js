import React from "react"
import Splash from "../Splash";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'

const Home = ({ authenticated }) => {
    const regions = Object.values(useSelector(state => state.regions))

    return(
        authenticated ? 
        <div id="carousel-div">
            <Carousel autoPlay={true} infiniteLoop={true} transitionTime={2000} interval={4000} showThumbs={false} showStatus={false} stopOnHover={false}>
                {regions.map(region =>
                    <div className="carousel-image-div" key={region.id}>
                        <div className="shadow">

                        </div>
                        <img className="carousel-image" src={region.imgUrl} alt="carousel"/>
                        <Link to={`/regions/${region.id}`}><span className="carousel-visit">Discover</span><span className="carousel-region-name">{region.name}</span></Link>
                    </div>
                )}
            </Carousel>
        </div>
        :
        <Splash/>
    )
};

export default Home;