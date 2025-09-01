import React, { useState } from "react";
import "./CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can log or send to backend
    console.log("Blog Title:", title);
    console.log("Blog Body:", body);
    console.log("Uploaded Image:", image);

    // Reset form
    setTitle("");
    setBody("");
    setImage(null);
  };

  return (
    <div className="create-blog-container">
      <h2>Create a New Blog</h2>
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          placeholder="Write your blog content here..."
          rows="6"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
