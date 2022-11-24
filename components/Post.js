import React from "react";
import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

function Post({ username, id, profileImg, postImage, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Post Header Section */}
      <div className="flex items-center p-5">
        <img src={profileImg} alt={username} className="h-12 rounded-full border p-[1.5px] cursor-pointer mr-4" />
        <p className="font-bold flex-1">{username}</p>

        <EllipsisHorizontalIcon  className="h-5"/>
      </div>

      {/* Post Image Section */}
      <img src={postImage} alt='post image' className="object-cover w-full" />

    </div>
  );
}

export default Post;
