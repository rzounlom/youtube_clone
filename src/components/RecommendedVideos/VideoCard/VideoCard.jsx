import React from "react";
import "./VideoCard.scss";

import Avatar from "@material-ui/core/Avatar";

const Video = ({ image, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className="video-card">
      <img src={image} alt="video" className="video-card-thumbnail" />
      <div className="video-card__info">
        <Avatar
          className="video-card__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video-card__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
