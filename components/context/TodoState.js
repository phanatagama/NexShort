import React, { useReducer } from "react"

// Bring the context
import TodoContext from "./TodoContext"

// Bring the reducer
import TodoReducer from "./TodoReducer"

// Bring the types
import {
  SET_URL,
  GET_URL,
  CREATE_URL,
  DELETE_URL,
  CLEAR_URL
} from "./TodoTypes"

const TodoState = ({ children }) => {
  // Define our state
  const initialState = {
    shortlink: [],
    URL: "",
    isSuccess: false
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
  const getURL = async () => {
    try {
      const shortlink = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      )
      const toJSON = await shortlink.json()

      dispatch({ type: GET_URL, payload: toJSON })
    } catch (err) {
      console.error(err.message)
    }
  }

  // Create todo
  const createURL = async (url) => {
    const { nanoid } = require('nanoid');
    const newURL = {
      url,
      path: nanoid(10),
    }

    try {
      const shortlink = await fetch("https://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newURL)
      })
      const toJSON = await shortlink.json()

      dispatch({ type: CLEAR_URL })
      dispatch({ type: CREATE_URL, payload: toJSON })
    } catch (err) {
      console.error(err.message)
    }
  }

  // Delete Todo
  const deleteURL = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      })

      dispatch({ type: DELETE_URL, payload: id })
    } catch (err) {
      console.error(err.message)
    }
  }

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
        getURL,
        setURL,
        createURL,
        deleteURL
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState