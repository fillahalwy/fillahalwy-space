import React from "react";
import BlogLists from "../components/BlogLists";
import { getBlogs } from "../utils/local-data";

function BlogsPage(){
    const blogs = getBlogs();
    return (
        <BlogLists blogs={blogs} />
    )
    // <h1 className="text-3xl font-semibold my-20">Coming Soon...</h1>
}

export default BlogsPage;