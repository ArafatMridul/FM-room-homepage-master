import React from "react";
import arrow from "/images/icon-arrow.svg";
import { motion } from "framer-motion";

const Button = () => {
    return (
        <button
            type="button"
            className="flex items-center gap-4 uppercase text-[1rem] tracking-[12px] hover:cursor-pointer hover:opacity-70 transition duration-300"
        >
            shop now
            <motion.span
                animate={{ x: [-5, 5, -5] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img src={arrow} alt="arrow icon" />
            </motion.span>
        </button>
    );
};

export default Button;
