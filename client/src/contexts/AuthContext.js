import React,{createContext,useState} from 'react';

 export const AuthContext = createContext();

 export const RecipeState = ({children})=>{
     const [user,setUser]= useState(null)

    return(
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )

 }

   

 


