import React from "react";

const PlayButton = ({ videoUrl }) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
      {/* partial:index.partial.html */}
      <div className="wrapper">
        <div className="video-main">
          <div className="promo-video">
            <div className="waves-block">
              <div className="waves wave-1" />
              <div className="waves wave-2" />
              <div className="waves wave-3" />
            </div>
          </div>
          <a
            href={videoUrl}
            className="video video-popup mfp-iframe"
            data-lity=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
      {/* partial */}
    </>
  );
};

export default PlayButton;


