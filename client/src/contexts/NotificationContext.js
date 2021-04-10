import React,{createContext,useState} from 'react';

export const NotificationContext = createContext();

//global context for notifications
//notify is set to false because if after requset to be set to true and if the notify is true this means that we have to show notification
//notifyMessagge is an object.It depends if the response if in bad or correct format it will show message and collor of notification
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
