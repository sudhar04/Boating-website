import { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const createBlog = async () => {
    await axios.post("http://localhost:5000/api/blogs", {
      title,
      content,
      image
    });

    alert("Blog Created");
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <input
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        onChange={e => setContent(e.target.value)}
      />

      <input
        placeholder="Image URL"
        onChange={e => setImage(e.target.value)}
      />

      <button onClick={createBlog}>
        Create Blog
      </button>
    </div>
  );
}

