import React from "react";

export default function CardImg({ url, explanation, media_type }) {
  return (
    <>
      {media_type === "image" ? (
        <div className="card-img">
          <img src={url} alt={explanation} />
        </div>
      ) : (
        <div className="card-iframe">
          <iframe title="youtube"
            width="100%"
            src="https://www.youtube.com/embed/J4gJY_5eNqQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
}
