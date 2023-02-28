import React, {useState, useContext, useEffect} from 'react'

export const url = `https://www.omdbapi.com/?i=tt3896198&apikeyt=${process.env.REACT_APP_MOVIE_KEY}`

const AppContext = React.createContext<null>(null)
console.log(url)

const AppProvider: React.FC<React.ReactNode> = ({children}) => {
    return <AppContext.Provider value='hello'>{children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}