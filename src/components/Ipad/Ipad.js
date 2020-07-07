import React, { useState } from "react";
import "./Ipad.css";
import Napster from "../util/Napster";
const Ipad = () => {
  const [song, updateSong] = useState("");

  const onClickHandler = (data) => {
    updateSong({
      song: data,
    });
  };
  return (
    <div>
      <div className="main-content">
        <div className="music-container">
          {song && (
            <>
              <div className="album-img">
                {console.log(song.song.albumId)}
                <img
                  src={`http://direct.rhapsody.com/imageserver/v2/albums/${song.song.albumId}/images/300x300.jpg`}
                  alt="albumimage"
                />
              </div>
              <div className="album-song">
                <h3>{song.song.name}</h3>
              </div>
            </>
          )}
        </div>
        <Napster onClickHandler={onClickHandler} />
        <div className="top-music-list">top chart</div>
      </div>
    </div>
  );
};
export default Ipad;
