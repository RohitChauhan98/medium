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


    return <div className="w-full">
        <Appbar />
        <div className="flex justify-center pt-10 w-full ">
            <input onChange={(e) => {
                setTitle(e.target.value)
            }} type="text" id="first_name" spellCheck="false" className="bg-gray-50 border mx-10 border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 w-full min-w-72 max-w-2xl focus:outline-none" placeholder="Title" required autoComplete="off" />

        </div>
        {/* <div className="flex justify-center pt-10 w-full ">

            <textarea onChange={(e) => {
                setContent(e.target.value)
            }} id="message" rows={8} spellCheck="false" className="block p-2.5 text-sm mx-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300  w-full min-w-72 max-w-2xl focus:outline-none" placeholder="Write your thoughts here..." />
        </div> */}
        <div className="flex justify-center flex-col w-80 m-auto border-2">
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
}

