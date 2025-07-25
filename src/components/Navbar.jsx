import React, { useEffect, useState } from "react";
import hamburger from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";
import siteLogo from "/images/logo.svg";
import { motion, AnimatePresence } from "motion/react";
import NavLiitem from "./NavLiitem";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="wrapper relative flex items-center gap-14 py-12 lg:py-15 px-6 sm:px-16 lg:px-0">
                <div
                    onClick={() => setIsOpen((curr) => !curr)}
                    className="absolute lg:hidden z-50 cursor-pointer"
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={isOpen ? "close" : "hamburger"}
                            src={isOpen ? close : hamburger}
                            alt={isOpen ? "close icon" : "menu icon"}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        />
                    </AnimatePresence>
                </div>
                <div className="w-full lg:w-auto">
                    <img
                        src={siteLogo}
                        alt="room website logo"
                        className="mx-auto lg:mx-0"
                    />
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="fixed lg:hidden bg-gradient-to-b from-primary-b/50 to-primary-b/10 top-0 right-0 left-0 bottom-0 z-20"
                            ></motion.div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                exit={{ width: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 bg-primary-w lg:hidden z-30"
                            >
                                <ul className="flex h-full items-center justify-end gap-[26px] sm:gap-9 lowercase text-primary-b pr-6 sm:pr-16 font-bold">
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-[30px] lowercase text-primary-w">
                        <NavLiitem>Home</NavLiitem>
                        <NavLiitem>Shop</NavLiitem>
                        <NavLiitem>About</NavLiitem>
                        <NavLiitem>Contact</NavLiitem>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
