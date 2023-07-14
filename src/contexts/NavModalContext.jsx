

import { createContext, useReducer } from "react"
import { NavModalReducer } from "../Reducers/NavModalReducer"

const initialState = {
    //replace with real initial state
    // transactions: {
    //     amount: 50,
    // }
}

export const NavModalContext = createContext(initialState)

const NavModalContextProvider = (props) => {

    const [state, dispath] = useReducer(NavModalReducer, initialState)

    return (
        <NavModalContext.Provider>
            {props.children}
        </NavModalContext.Provider>
    )
}

export default NavModalContextProvider;