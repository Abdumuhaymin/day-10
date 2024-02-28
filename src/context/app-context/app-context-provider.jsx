import React from 'react'
import { appReducer } from './reducer';


export const AppContext=React.createContext();

let initialState={
    user:[],
    count:0,
}


export const AppContextProvider = ({children}) => {
    const [data,dispatch]=React.useReducer(appReducer,initialState)
  return (
    <AppContext.Provider value={{data,dispatch}}>
        {children}
    </AppContext.Provider>
  )
}
