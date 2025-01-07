import * as React from 'react'
import ResultBar from './ResultBar'
import TodoContext from './context/TodoContext';
import * as Yup from  'yup';
import {  useFormik } from "formik";

function InputBar() {
    const { URL: url, setURL, createURL, isSuccess } = React.useContext<{URL: string, setURL, createURL, isSuccess: boolean}>(TodoContext)
    const formik = useFormik({
        initialValues: {
            url: "",
          },
          validationSchema: Yup.object({
            url: Yup.string()
              .min(4, "Minimum 4 characters")
              .url("Enter correct URL!")
            //   .matches(
            //     /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            //     'Enter correct URL!')    
              .required("Required!"),
          }),
          onSubmit: (value) => {
              onCreateShorlink(value);
            }
    })
    const [loading, setLoading] = React.useState<React.ReactNode>('');
    const onCreateShorlink = async (value: {url :string}) => {
        setLoading(<p className="bg-green-200 text-green-500 font-black p-3 rounded ring ring-green-200 ring-opacity-50">Please wait...</p>);
        const sanitize_url = (value.url.startsWith('https://')) || value.url.startsWith('http://') ? value.url : `https://${value.url}`
        const new_sanitize_url = new URL(sanitize_url);
        setURL(new_sanitize_url);
        await createURL(new_sanitize_url);
    }
    return (
        <div className="mt-16 mx-8 md:mx-48">
            <form className="flex" onSubmit={formik.handleSubmit}>
                <input onChange={ formik.handleChange} name="url" className="my-8 p-2 text-xl text-gray-800 font-bold w-3/4 md:w-4/5 focus:outline-none focus:ring focus:border-blue-300" type="text" placeholder="https://example.com" value={formik.values.url}/>
                <button className="my-8 p-2 bg-red-500 rounded w-1/4 md:w-1/5 text-white transform hover:scale-110 transition ease-in-out duration-700" type='submit'>Short</button>
            </form>
                {formik.errors.url && formik.touched.url && (
                        <p className="text-red-500">{formik.errors.url}</p>
                    )}
            {isSuccess ? <ResultBar/> : loading }
        </div>
    );
}

export default InputBar
