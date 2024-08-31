import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
// import "."
// import "./../App.css";

const BodyContainer = () => {
    return (
        <div className="flex flex-wrap">
            <Sidebar />
            <Body />
        </div>
    );
};

export default BodyContainer;
