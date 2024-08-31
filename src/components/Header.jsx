import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
    return (
        <div className="p-4 py-5 pt-5 grid grid-flow-col grid-cols-3 shadow-md">
            <div className="left-container flex">
                <div className="toggler mr-3 cursor-pointer">
                    <MenuIcon sx={{ fontSize: 35 }} />
                </div>
                <div className="logo text-red-600 w-9 flex cursor-pointer">
                    <YouTubeIcon sx={{ fontSize: 35 }} />
                    <span className="font-bold text-black roboto-bold text-xl pt-1 pl-[3px]">
                        YouTube
                    </span>
                </div>
            </div>
            <div className="mid-container w-full">
                <div className="input flex flex-wrap w-full">
                    <input
                        type="text"
                        className="border-gray-300 border-y-2 border-l-2 rounded-l-full w-10/12 h-9 pl-3 "
                    />
                    <div className="search-icon bg-gray-300 rounded-r-full px-3 pt-1">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className="right-container">
                <span className="user-icon bg-gray-300  rounded-full p-1 px-2 float-end">
                    <PersonIcon sx={{ fontSize: 20 }} />
                </span>
            </div>
        </div>
    );
};

export default Header;
