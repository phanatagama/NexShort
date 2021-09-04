// Dont Forget import the types
import {
    SET_URL,
    GET_URL,
    CREATE_URL,
    DELETE_URL,
    CLEAR_URL
  } from "components/context/TodoTypes"
  
  export default (state, { type, payload }) => {
    switch (type) {
      // Get all todos
      case GET_URL:
        return {
          ...state,
          // loading: false,
          shortlink: payload
        }
      // Set URL for form
      case SET_URL:
        return {
          ...state,
          URL: payload
        }
      // Create a new URL
      case CREATE_URL:
        return {
          ...state,
          isSuccess: true,
          shortlink: [payload, ...state.shorlink]
        }
      // Clear URL after create
      case CLEAR_URL:
        return {
          ...state,
          URL: ""
        }
      // Delete a URL
      case DELETE_URL:
        return {
          ...state,
          shortlink: state.shorlink.filter((todo) => todo.id !== payload)
        }
      default:
        return state
    }
  }