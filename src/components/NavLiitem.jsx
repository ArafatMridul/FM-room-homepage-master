import React from "react";

const NavLiitem = ({ children }) => {
    return (
        <li className="relative cursor-pointer after:content-[''] after:absolute after:-bottom-[5px] after:left-2 after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-primary-w hover:after:w-[50%]">
            {children}
        </li>
    );
};

export default NavLiitem;
