import { SignupInput } from "@rc56951/medium-common";
import axios from "axios";
import { ChangeEvent, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) =>{
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username:"",
        password: "",
    });

    const navigate = useNavigate();

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
            
        } catch (e) {
            console.log("something went wrong")
        }
    }
    
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="">
                <div className="text-3xl font-extrabold">
                    {type === "signup"?"Create an account":"Sign in"}
                </div>
               
                {type == "signup"?<LabelledInput label="Name" placeholder="Rohit Chauhan" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }}/>:""}
                <LabelledInput label="Email" type="email" placeholder="rohit@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }}/>
                <LabelledInput label="Password" type="password"  onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }}/>
                <div className="flex
                justify-center pt-6">
                <button onClick={sendRequest} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">
                    {type === "signup"? "Sign up": "Sign in" }
                </button>
                </div>
                <div className="text-slate-400">
                    {type === "signup"? "Already have an account?":"Don't have an account"}
                    <Link className="pl-2 underline" to={type === "signup"?'/signin':'/signup'}>{type === "signup"?"Signin":"Signup"}</Link>
                </div>
            </div>
        </div>

    </div>
}

interface LabelledInputType {
    label: string,
    placeholder?: string,
    type?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return <div>
    <label className="block mb-2 mt-4 text-sm font-semibold text-gray-900">{label}</label>
    <input onChange={onChange} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>  
}