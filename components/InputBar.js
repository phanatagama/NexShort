import React, { useContext } from 'react'
import ResultBar from 'components/ResultBar'
import TodoContext from 'components/context/TodoContext';

function InputBar() {
    const { URL, setURL, createURL, isSuccess } = useContext(TodoContext)
    const onCreateShorlink = async (e) => {
        e.preventDefault();
        await createURL(URL);
    }
    return (
        <>
            <form className="w-4/5 flex" onSubmit={onCreateShorlink}>
                <input onChange={ (e) => setURL(e.target.value)} className="my-8 p-2 text-xl font-bold w-3/4 md:w-4/5 focus:outline-none focus:ring focus:border-blue-300" type="text" placeholder="https://example.com" value={URL}/>
                <button className="my-8 p-2 bg-blue-500 rounded w-1/4 md:w-1/5 text-white transform hover:scale-110 transition ease-in-out duration-700">Short</button>
            </form>
            {isSuccess && <ResultBar/>}
        </>
    );
}

export default InputBar
