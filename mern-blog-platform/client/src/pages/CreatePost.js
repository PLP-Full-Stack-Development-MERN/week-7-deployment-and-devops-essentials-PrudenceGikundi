import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts", { title, content });
      navigate("/");
    } catch (err) {
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <div
      className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md"
      style={{ borderLeft: "4px solid #004d4d" }}
    >
      <h1 className="text-2xl font-bold text-teal-600 mb-4">Create New Post</h1>
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-3 border rounded h-40 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
