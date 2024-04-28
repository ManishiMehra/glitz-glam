import React from "react";
import JewelleryVideo from "../../Assests/Jewellery Video.mp4";

const VideoCardComponent = () => {
  return (
    <div className="video-container">
      <video
        controls
        sx={{
          width: "300px",
          height: "auto",
          float: "left",
          marginRight: "20px",
        }}
      >
        <source src={JewelleryVideo} />
      </video>
    </div>
  );
};

export default VideoCardComponent;
