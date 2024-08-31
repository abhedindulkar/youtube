import React from "react";
import TagButtons from "./TagButtons";
import VideoContainer from "./VideoContainer";

const Body = () => {
    return (
        <div className="w-full">
            <TagButtons />
            <VideoContainer />
        </div>
    );
};

export default Body;
