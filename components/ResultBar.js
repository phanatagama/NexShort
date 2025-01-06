import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import TodoContext from "components/context/TodoContext";

export default function ResultBar() {
    const { shortlink } = useContext(TodoContext);
    const [isCopy,setIsCopy] = useState(false)
    const onCopy = (e) => {
        e.preventDefault();
        let path = shortlink[shortlink.length-1].path;
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_BASE_URL +"/"+path);
        const interval = setInterval(() => {
            setIsCopy(true)
            setTimeout(() => {
                setIsCopy(false)
                clearInterval(interval)
            },2000)
        },100)
    }
    return (
        <>
        <div className="w-full flex flex-col md:flex-row">
                <input className="mt-8 md:my-8 p-2 text-xl text-gray-800 font-bold md:w-4/5 focus:outline-none focus:ring focus:border-blue-300" type="text" placeholder="https://example.com" value={process.env.NEXT_PUBLIC_BASE_URL +"/"+shortlink[shortlink.length-1].path}/>
            <button onClick={onCopy} className="my-8 p-2 bg-blue-500 rounded md:w-1/5 text-white transform hover:scale-110 transition ease-in-out duration-700">
                <FontAwesomeIcon icon={faClipboard} /> Copy
            </button>
        </div>
        { isCopy && <p className="bg-green-200 text-green-500 font-black p-3 rounded ring ring-green-200 ring-opacity-50">Coppied!</p>}
        </>
    );
}