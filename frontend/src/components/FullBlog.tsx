import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl">
                    <div className="col-span-8">
                        <div className="text-3xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500">
                            Posted on 2nd Jan 2024
                        </div>
                        <div className="text-gray-600">{blog.content}</div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-600 text-md font-medium">
                        Author

                        </div>
                        <div className="flex mt-5">
                            <div className="flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />

                            </div>
                            <div className="pl-4">
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Random catch phrase about the author
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};