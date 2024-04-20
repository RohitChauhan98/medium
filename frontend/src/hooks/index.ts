import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
    "content": string;
    "title": string,
    "id": 1,
    "author": {
        "name": string
    }
}

// export interface userDetail{
//     "name": string;
// }


export const useBlog = ({id}: {id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    
    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
    }, [id])

    return {
        loading,
        blog
    }
}

export const getName = () => {
    const [name, setName] = useState("");
    
    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/getUserDetail`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setName(response.data.name);
        })
    }, [])

    return name

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
    }, [])

    return {
        loading,
        blogs
    }

}

