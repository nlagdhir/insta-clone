import { useState } from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Post({ username, id, profileImg, postImage, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");

  const handlePostClicked = async (event) => {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    console.log(id);

    // const docRef = await addDoc(collection(db, "cities", 'fQAHPALLtP4VKdj7n5eI', 'comments'), {
    //   name: "Tokyo",
    //   country: "Japan"
    // });
    // console.log("Document written with ID: ", docRef.id);

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });

  
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Post Header Section */}
      <div className="flex items-center p-5">
        <img
          src={profileImg}
          alt={username}
          className="h-12 rounded-full border p-[1.5px] cursor-pointer mr-4"
        />
        <p className="font-bold flex-1">{username}</p>

        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Image Section */}
      <img src={postImage} alt="post image" className="object-cover w-full" />

      {/* Post buttons */}

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Post caption */}

      <p className="p-4 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post comment form */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            placeholder="Enter your comment..."
            className="flex-1 focus:ring-0 border-0"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            onClick={handlePostClicked}
            className="font-bold text-blue-400 disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
