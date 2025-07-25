import React, { useState } from "react";
import product1Mob from "/images/mobile-image-hero-1.jpg";
import product1Dek from "/images/desktop-image-hero-1.jpg";
import product2Mob from "/images/mobile-image-hero-2.jpg";
import product2Dek from "/images/desktop-image-hero-2.jpg";
import product3Mob from "/images/mobile-image-hero-3.jpg";
import product3Dek from "/images/desktop-image-hero-3.jpg";
import right from "/images/icon-angle-right.svg";
import left from "/images/icon-angle-left.svg";
import Button from "./Button";

const products = [
    {
        image: {
            mob: product1Mob,
            dek: product1Dek,
        },
        heading: "Discover innovative ways to decorate",
        description:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        image: {
            mob: product2Mob,
            dek: product2Dek,
        },
        heading: "We are available all across the globe",
        description:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        image: {
            mob: product3Mob,
            dek: product3Dek,
        },
        heading: "Manufactured with the best materials",
        description:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];

const Hero = () => {
    const [value, setValue] = useState(0);
    console.log(value);
    return (
        <section>
            <div className="relative lg:grid grid-cols-10">
                <div className="relative select-none lg:col-start-1 lg:col-span-6">
                    <picture>
                        <source
                            media="(min-width: 600px)"
                            srcset={products[value].image.dek}
                        />
                        <img
                            src={products[value].image.mob}
                            alt={`${products[value].heading}`}
                            className="w-full"
                        />
                    </picture>
                    <div className="lg:hidden bg-primary-b flex absolute bottom-0 right-0 lg:translate-x-[100%]">
                        <div
                            className={`py-4 px-5.5 lg:px-8 lg:py-6 bg-primary-b ${
                                value === 0
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            } transition duration-300`}
                            onClick={() =>
                                value > 0 && setValue((curr) => curr - 1)
                            }
                        >
                            <img
                                src={left}
                                alt="left arrow icon"
                                className={`w-3 lg:w-4 ${
                                    value === 0
                                        ? "cursor-not-allowed"
                                        : "cursor-pointer"
                                }`}
                            />
                        </div>
                        <div
                            className={`py-4 px-5.5 lg:px-8 lg:py-6 bg-primary-b cursor-pointer ${
                                value === 2
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            } transition duration-300`}
                            onClick={() =>
                                value < 2 && setValue((curr) => curr + 1)
                            }
                        >
                            <img
                                src={right}
                                alt="right arrow icon"
                                className={`w-3 lg:w-4 ${
                                    value === 2
                                        ? "cursor-not-allowed"
                                        : "cursor-pointer"
                                }`}
                            />
                        </div>
                    </div>
                </div>
                <div className="py-16 px-6 sm:mx-auto lg:px-20 lg:mt-14 lg:mx-0 sm:w-[660px] lg:w-auto lg:col-start-7 lg:col-span-4">
                    <div>
                        <h1 className="text-[2.35rem] lg:text-[2.75rem] leading-[1] tracking-tight font-bold text-start">
                            {products[value].heading}
                        </h1>
                    </div>
                    <div>
                        <p className="text-primary-g-1 text-[0.98rem] h-[150px] sm:h-[100px] lg:h-auto mt-4 lg:mt-6 leading-[1.3] tracking-tight">
                            {products[value].description}
                        </p>
                    </div>
                    <div className="mt-3 lg:mt-6">
                        <Button />
                    </div>
                </div>
                <div className="hidden h-20 bg-primary-b w-full lg:flex lg:items-center lg:justify-center absolute bottom-0 col-start-7 col-span-1">
                    <div
                        className={`w-1/2 h-full flex items-center justify-center bg-primary-b ${
                            value === 0
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:bg-primary-g-2"
                        } transition duration-300`}
                        onClick={() =>
                            value > 0 && setValue((curr) => curr - 1)
                        }
                    >
                        <img
                            src={left}
                            alt="left arrow icon"
                            className={`w-5 ${
                                value === 0
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}
                        />
                    </div>
                    <div
                        className={`w-1/2 h-full flex items-center justify-center bg-primary-b cursor-pointer ${
                            value === 2
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:bg-primary-g-2"
                        } transition duration-300`}
                        onClick={() =>
                            value < 2 && setValue((curr) => curr + 1)
                        }
                    >
                        <img
                            src={right}
                            alt="right arrow icon"
                            className={`w-5 ${
                                value === 2
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
