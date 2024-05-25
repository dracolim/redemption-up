"use client"

import React, { useContext, useEffect, useState, useRef, useMemo } from "react"

// define your return types for your states/functions here
type AppContextType = {

}

type ChildrenProps = {
	children: React.ReactNode
}

const AppContext = React.createContext<AppContextType | null>(null)

const AppProvider = (({children} : ChildrenProps) => {

    // define your variables and functions here

    return(
        <AppContext.Provider value={{
            // pass the values you want to put in the global context here
            
        }}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }