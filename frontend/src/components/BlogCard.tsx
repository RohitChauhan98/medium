import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  key: number;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  content = content.substring(1, content.length - 1)
  content = content.length > 300 ? content.slice(0,300):content;

  return (<Link to={`/blog/${id}`}>
    <div className="border-b px-10 py-5 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div>
          <Avatar name={authorName} />
        </div>
        <div className="px-2 font-extralight">{authorName} </div>
        <div className="text-slate-400">
        &#x2022;
        </div>
        <div className="pl-2 font-thin text-slate-500">{publishedDate}</div>
      </div>
      <div className="text-xl font-bold pt-2">{title}</div>
      <div className="font-thin" id="preview">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="text-slate-400 pt-2 text-sm font-thin">{`${Math.ceil(content.length / 100)} min`}</div>
    </div>
    </Link>
  );
};

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden ${size === "small"?"w-6 h-6":"w-10 h-10"} bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className={` text-gray-600 dark:text-gray-300 ${size === "small"?"text-sm":"text-lg"}`}>
        {name[0]}
      </span>
    </div>
  );
}
