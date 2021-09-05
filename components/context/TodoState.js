import React, { useReducer } from "react"

// Bring the context
import TodoContext from "components/context/TodoContext"

// Bring the reducer
import TodoReducer from "components/context/TodoReducer"

// Bring the types
import {
  SET_URL,
  // GET_URL,
  CREATE_URL,
  // DELETE_URL,
  CLEAR_URL
} from "components/context/TodoTypes"

const TodoState = ({ children }) => {
  // Define our state
  const initialState = {
    shortlink: [],
    URL: "",
    isSuccess: false,
  }

  // Dispatch the reducer
  // This come from useReducer from ReactJS
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  // Set the title for the new todo
  // This will change whenever user type in the form later
  const setURL = (payload) => {
    dispatch({ type: SET_URL, payload })
  }

  // Get todos
  // const getURL = async () => {
  //   try {
  //     const shortlink = await fetch(
  //       `${process.env.BASE_URL}/api/v1`
  //     )
  //     const toJSON = await shortlink.json()

  //     dispatch({ type: GET_URL, payload: toJSON })
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  // Create todo
  const createURL = async (url) => {
    const { nanoid } = require('nanoid');
    const newURL = {
      url,
      path: nanoid(4),
    }

    try {
      const shortlink = await fetch(`${process.env.BASE_URL}/api/v1`, {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newURL)
      })
      const toJSON = await shortlink.json()
      const data = toJSON.data[0]
      dispatch({ type: CLEAR_URL, payload: '' })
      dispatch({ type: CREATE_URL, payload: data })
    } catch (err) {
      console.error(err.message)
    }
  }

  // Delete Todo
  // const deleteURL = async (id) => {
  //   try {
  //     await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  //       method: "DELETE"
  //     })

  //     dispatch({ type: DELETE_URL, payload: id })
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  // Destruct the states
  const { shortlink, URL, isSuccess } = state

  // Here's where we gonna use this state and funcitons to dealing with the context
  // The context will wrapping our entire application with this component and accept children in it
  // Anything state or function, must be passed in to value props in this provider in order to use it
  // NOTE: PLEASE NOTICE, IF YOU DIDN'T PASS THE STATE OR THE FUNCTION in THIS VALUE PROPS, YOU WILL GET AN ERROR
  return (
    <TodoContext.Provider
      value={{
        shortlink,
        URL,
        isSuccess,
        setURL,
        createURL
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState