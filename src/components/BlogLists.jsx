import React from "react";
import BlogCard from "./BlogCard";

function BlogLists({blogs}){
    return(
        <article className="my-15">
            {
                blogs.map((blog) => (
                    <BlogCard key={blog.id} id={blog.id} title={blog.title} date={blog.date} tags={blog.tags} content={blog.content} />
                ))
            }
        </article>
    )
}

export default BlogLists;