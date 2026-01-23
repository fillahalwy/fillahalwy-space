import React from "react";
import { Link } from "react-router-dom";

function BlogCard({id, title, date, tags, content}){
    return(
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 my-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <span className="text-sm py-1 px-2 bg-blue-100 rounded-2xl lowercase">{ tags }</span>
        <h3 className="text-2xl font-semibold my-3">{ title }</h3>
        <p className="my-3 text-lg text-gray-500 line-clamp-3">{ content }</p>
        <div className="mt-5 pt-5 border-t border-gray-50 flex justify-between items-center">
          <span className="text-xs text-gray-500">Published on { date }</span>
          <Link to={`/blogs/${id}`} className="flex items-center text-blue-600 font-bold text-md hover:underline" >
            Read More
          </Link>
        </div>
      </div>
    )
}

export default BlogCard;