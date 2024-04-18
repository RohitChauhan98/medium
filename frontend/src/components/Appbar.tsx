import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex justify-center flex-col">
        <Link to={'/blogs'}>
            Medium
        </Link>
        </div>
        <div>
        <Link to={`/publish`}>
        <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-xl text-sm px-4 py-2 mr-5 text-center me-2 mb-2 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600">Write</button></Link>
            <Avatar name="Rohit" size={"big"} />
        </div>
    </div>
}