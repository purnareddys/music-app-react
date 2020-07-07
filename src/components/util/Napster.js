import React from "react";
import axios from "axios";
//for image
//http://direct.rhapsody.com/imageserver/v2/albums/{{albumId}}/images/300x300.jpg
const Napster = ({ onClickHandler }) => {
  const apikey = "ZTlkNzUyMmEtZjNhZS00NmE5LTgyOGUtM2YxYjRjMzE4Mjc1";

  const getData = async () => {
    const data = await axios.get(
      `https://api.napster.com/v2.1/tracks/top?apikey=${apikey}`
    );
    // console.log(data.data.tracks[0]);
    onClickHandler(data.data.tracks[0]);
  };

  return (
    <div>
      <h2>API call</h2>
      <button
        onClick={() => {
          getData();
        }}
      >
        get Data
      </button>
    </div>
  );
};
export default Napster;
