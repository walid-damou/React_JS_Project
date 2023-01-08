import React from "react";
import qatarillustration from '../assets/images/qatarillustration.png'
const Hero = () => {

    return (
        <section className="mx-5 md:mx-20">
            <div className="flex flex-col-reverse py-10 md:flex-row md:justify-between md:items-center md:space-x-16">
                {/* Left side */}
                <div className="flex flex-col space-y-6 py-6 text-center items-center md:items-start md:text-left md:w-1/2">
                    <h1 className="text-darkGrey font-bold text-4xl md:text-justify md:text-4xl">Welcome to <span className="text-mainColor">QatariVoyage</span>, where you can experience the beauty and culture of <span className="text-mainColor">Qatar</span></h1>
                    <p className="text-darkGrey font-semibold text-sm md:text-justify">
                        Discover the treasures of Qatar with our comprehensive travel website. We offer translation services, up-to-date weather information, suggestions for top places to visit, and a currency converter to make your trip stress-free and enjoyable.</p>
                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <input type="button" value="weather" className="uppercase rounded-md py-2  w-36 font-semibold shadow-3xl cursor-pointer border border-mainColor hover:text-mainColor hover:bg-white text-white bg-mainColor" />
                        <input type="button" value="currency" className="uppercase rounded-md py-2 w-36 font-semibold shadow-3xl cursor-pointer text-lightColor border border-lightColor bg-white hover:text-white hover:bg-lightColor" />
                    </div>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 ">
                <img src={qatarillustration} alt="qatar" className=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
