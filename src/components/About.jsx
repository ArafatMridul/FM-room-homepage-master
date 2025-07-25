import React from "react";
import dark from "/images/image-about-dark.jpg";
import light from "/images/image-about-light.jpg";

const About = () => {
    return (
        <section>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-10 h-full">
                <div className="lg:grid-cols-1 lg:col-span-3">
                    <img src={dark} alt="about image dark" className="w-full h-full" />
                </div>
                <div className="text-start px-8 lg:px-10 pt-14 pb-8 lg:grid-cols-4 lg:col-span-4">
                    <h2 className="text-sm lg:text-[1rem] font-bold uppercase text-primary-b tracking-[6px]">
                        About our furniture
                    </h2>
                    <p className="mt-4 text-primary-g-1 leading-[1.42]">
                        Our multifunctional collection blends design and
                        function to suit your individual taste.Make each room
                        unique, or pick a cohesive theme that best express your
                        interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </div>
                <div className="sm:row-start-2 sm:col-span-2 lg:row-start-1 lg:col-start-8 lg:col-span-3">
                    <img
                        src={light}
                        alt="about image light"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
