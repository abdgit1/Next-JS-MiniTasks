"use client";
import React from "react";

import {useState} from "react";

export default function LikeButton({movieid}) {
    console.log("Movie ID:", movieid);
    const [likes, setLikes] = useState(0);
    console.log("Likes:", likes);

  return (
    <button className="bg-blue-500 text-white p-2 rounded mt-8" onClick={() => setLikes(likes + 1)}>
    Movie ID : {movieid}      <br />
 Likes : ({likes})
    </button>
  );

}
