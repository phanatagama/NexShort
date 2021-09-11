import React, { useContext, useState } from 'react'
import ResultBar from 'components/ResultBar'
import TodoContext from 'components/context/TodoContext';
import * as Yup from  'yup';
import { useFormik } from "formik";

function InputBar() {
    const { URL, setURL, createURL, isSuccess } = useContext(TodoContext)
    const formik = useFormik({
        initialValues: {
            url: "",
          },
          validationSchema: Yup.object({
            url: Yup.string()
              .min(4, "Mininum 4 characters")
              .matches(
                /^((https|http):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!')    
              .required("Required!"),
          }),
          onSubmit: (value) => {
              onCreateShorlink(value);
            }
    })
    const [loading, setLoading] = useState('');
    const onCreateShorlink = async (value) => {
        setLoading(<p className="bg-green-200 text-green-500 font-black p-3 rounded ring ring-green-200 ring-opacity-50">Please wait...</p>);
        const url = (value.url.startsWith('https://')) || value.url.startsWith('http://') ? value.url : `https://${value.url}`
        setURL(url);
        await createURL(url);
    }
    return (
        <>
            <form className="w-4/5 flex" onSubmit={formik.handleSubmit}>
                <input onChange={ formik.handleChange} name="url" className="my-8 p-2 text-xl text-gray-800 font-bold w-3/4 md:w-4/5 focus:outline-none focus:ring focus:border-blue-300" type="text" placeholder="https://example.com" value={formik.values.url}/>
                <button className="my-8 p-2 bg-blue-500 rounded w-1/4 md:w-1/5 text-white transform hover:scale-110 transition ease-in-out duration-700">Short</button>
            </form>
                {formik.errors.url && formik.touched.url && (
                        <p className="text-red-500">{formik.errors.url}</p>
                    )}
            {isSuccess ? <ResultBar/> : loading }
        </>
    );
}

export default InputBar
