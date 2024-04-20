import { useNavigate } from "react-router-dom";
import { Help, Profile, Setting, Signout, Stats } from "./SVGs";


export const Menu = () => {
    const navigate = useNavigate();
    function signout(){
        localStorage.removeItem('token');
        navigate("/signup");
    }

    return (
        <div className="w-56 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-5 rounded-lg">
            <div className="flex mb-4 text-gray-500">
                <div className="w-9">
                    <Profile />
                </div>
                <div className="ml-2 flex justify-center flex-col">
                    Profile
                </div>
            </div>
            <div className="flex mb-4 text-gray-500">
                <div className="w-9">
                    <Stats />
                </div>
                <div className="ml-2 flex justify-center flex-col">
                    Stats
                </div>
            </div>
            <div className="flex mb-4 text-gray-500">
                <div className="w-9">
                    <Setting />
                </div>
                <div className="ml-2 flex justify-center flex-col">
                    Settings
                </div>
            </div>
            <div className="flex mb-4 text-gray-500">
                <div className="w-9">
                 <Help />
                </div>
                <div className="ml-2 flex justify-center flex-col">
                    Help
                </div>
            </div>
            <div onClick={signout} className="flex mb-4 text-gray-500">
                <div className="w-9">
                <Signout />
                </div>
                <div className="ml-2 flex justify-center flex-col">
                    Sign Out
                </div>
            </div>
        </div>
    );
};
