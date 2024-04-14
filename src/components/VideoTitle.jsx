import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[19%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-zinc-600 text-white p-3 px-10  my-3 mx-4 w-15 text-xl rounded hover:bg-zinc-400 hover:text-zinc-900 opacity-90">
          ➤ Play
        </button>
        <button className="bg-zinc-600 text-white p-3 px-5  w-15 text-xl rounded hover:bg-zinc-400 hover:text-zinc-900 opacity-90">
        i More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
