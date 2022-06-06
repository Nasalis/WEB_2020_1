import { createContext, useContext } from "react";
import Firebase from "../Firebase";

export const FirebaseContext = createContext(null);

export function FirebaseContextProvider({children}) {
    const firebase = new Firebase();

    return (
        <FirebaseContext.Provider
            value={{firebase}}
        >
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => {
    return useContext(FirebaseContext)
}