import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Tiptap from "../components/Tiptap"





export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();


    interface contentType {
        updateContent: (newValue: string) => void;
    }

    const updateContent: contentType['updateContent'] = (newValue) => {
        setContent(newValue);
    };


    return <div className="">
        <Appbar />
        <div className="w-4/5 lg:w-1/2 m-auto">
            <div className="flex justify-center pt-10 w-full ">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" id="first_name" spellCheck="false" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 w-full  focus:outline-none" placeholder="Title" required autoComplete="off" />

            </div>
            <div className="flex justify-center flex-col border-2 rounded-lg mt-5">
                <Tiptap updateContent={updateContent} />
            </div>

            <div className="flex justify-center pt-10 w-full">
                <button onClick={async () => {

                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }} type="button" className="text-white bg-blue-700 mx-10 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-40">Publish Post </button>
            </div>

        </div>

    </div>
}

