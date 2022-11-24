import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon, BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon,FaceSmileIcon

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

      {/* Post buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post caption */}

      <p className="p-4 truncate"><span className="font-bold mr-2">{username}</span>{caption}</p>

      {/* Post comment form */}
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input type="text" placeholder="Enter your comment..." className="flex-1 focus:ring-0 border-0" />
        <button className="font-bold text-blue-400 disabled:text-blue-200">Post</button>
      </form>

    </div>
  );
}

export default Post;
