import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { Menu } from "./Menu"
import { useState } from "react"
import { getName } from "../hooks"



export const Appbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const  name = getName() || "Anonymous";
    console.log(name);
    const showMenu = () => {
        setMenuVisible(!menuVisible);
    }

    // if(loading || !user){
    //     return <div>
    //         loading...
    //     </div>
    // }

    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex justify-center flex-col">
        <Link to={'/blogs'}>
            Medium
        </Link>
        </div>
        <div className="flex">
        <Link to={`/publish`}>
        <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-xl text-sm px-4 py-2 mr-5 text-center me-2 mb-2 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600">Write</button></Link>
        <div className="flex flex-col position: relative ">
            <button className="" onClick={showMenu}>
                <Avatar name={name} size={"big"} />
            </button>
            <div className="position: absolute top-14 right-1 z-10 bg-white">
                {menuVisible && <Menu/>}
            </div>
        </div>
        </div>
    </div>
}