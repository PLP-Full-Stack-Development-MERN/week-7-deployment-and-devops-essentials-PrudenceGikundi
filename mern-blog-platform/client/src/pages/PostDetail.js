import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError("Failed to fetch post. Please try again.");
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {error}
        </div>
      )}
      {post ? (
        <>
          <h1 className="text-3xl font-bold text-teal-600 mb-4">{post.title}</h1>
          <p className="text-gray-700">{post.content}</p>
          <p className="text-sm text-gray-500 mt-4">By {post.author}</p>
        </>
      ) : (
        <p className="text-gray-500">Loading post...</p>
      )}
    </div>
  );
};

export default PostDetail;
