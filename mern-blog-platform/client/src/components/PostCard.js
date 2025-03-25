import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 mb-4"
      style={{ borderLeft: "4px solid #004d4d" }}
    >
      <h2 className="text-teal-600 font-bold text-lg">{post.title}</h2>
      <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">By {post.author}</span>
        <Link
          to={`/post/${post.id}`}
          className="text-teal-600 hover:text-teal-800 font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;