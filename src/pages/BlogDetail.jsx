import { useParams } from "react-router-dom";
import { getBlogsById } from "../utils/local-data";

function BlogDetail(){
  const { id } = useParams();
  const blog = getBlogsById(id);

  if (!blog) {
    return <div className="text-center mt-20">Blog tidak ditemukan!</div>;
  }

  return(
    <article className="max-w-3xl mx-auto px-4 py-20">
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
        {blog.tags}
      </span>
      <h1 className="text-4xl font-bold my-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8 italic">Published on {blog.date}</p>
      
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {blog.content}
      </div>
    </article>
  )

}

export default BlogDetail;
