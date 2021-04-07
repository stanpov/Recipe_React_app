import React,{createContext,useState} from 'react';

export const NotificationContext = createContext();

export const NotificationState = ({children})=>{
    const [notify,setNotify] = useState(false);
    const [notifyMessagge,setNotifyMessagge] = useState({nMessage:'',nCollor: ''});



    return (
        <NotificationContext.Provider value={{
            notify,
            setNotify,
            notifyMessagge,
            setNotifyMessagge
        }}>
            {children}
        </NotificationContext.Provider>
    )
}
