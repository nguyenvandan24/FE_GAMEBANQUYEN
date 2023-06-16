import {createContext, useState} from "react";

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [loginUser, setLoginUser] = useState(null);

    return(
        <UserContext.Provider value={{loginUser, setLoginUser}}>
            {children}
        </UserContext.Provider>
    )
}
