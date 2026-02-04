import React from "react";
import BlogLists from "../components/BlogLists";
import { getBlogs } from "../utils/local-data";

function BlogsPage(){
  const blogs = getBlogs();
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Blogs</h1>
        <p className="text-gray-500 mt-2">Cuman kumpulan tulisan-tulisan yang pernah saya buat.</p>
      </div>
      <BlogLists blogs={blogs} />
    </div>
  )
}

export default BlogsPage;