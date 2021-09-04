import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import TodoContext from "components/context/TodoContext";

export default function ResultBar() {
    const { shortlink } = useContext(TodoContext)
    return (
        <div className="w-4/5 flex">
            <input className="my-8 p-2 text-xl font-bold w-4/5 focus:outline-none focus:ring focus:border-blue-300" type="text" placeholder="https://example.com" value={shortlink[0].path}/>
            <button className="my-8 p-2 bg-blue-500 rounded w-1/5 text-white transform hover:scale-110 transition ease-in-out duration-700">
                <FontAwesomeIcon icon={faClipboard} /> Copy
            </button>
        </div>
    );
}