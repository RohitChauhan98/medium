import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
       <BlogCardSkeleton />
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              key={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="18 April 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
