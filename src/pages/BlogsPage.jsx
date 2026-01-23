import React from "react";
import BlogLists from "../components/BlogLists";
import { getBlogs } from "../utils/local-data";

function BlogsPage(){
    const blogs = getBlogs();
    return (
        <BlogLists blogs={blogs} />
    )
}

export default BlogsPage;