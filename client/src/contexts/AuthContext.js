import React,{createContext,useState} from 'react';
import axios from 'axios';

 export const AuthContext = createContext();
 
 export const RecipeState = ({children})=>{
     const [user,setUser]= useState(null)
        

        const Logout = ()=>{
            axios.post('http://localhost:5000/user/logout',{ 
            },{withCredentials:true}).then(()=>{
                setUser(null)
            })
        }

        
     

    return(
        <AuthContext.Provider value={{
            user,
            setUser,
            Logout,
           
            
        }}>
            {children}
        </AuthContext.Provider>
    )

 }

   

 


