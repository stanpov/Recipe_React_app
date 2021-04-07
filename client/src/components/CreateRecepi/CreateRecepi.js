import React,{useState,useContext} from 'react'
import "./CreateRecepi.css";
import { useHistory } from 'react-router-dom';
import * as recepiServices from '../../services/recepiServices/index';
import {NotificationContext} from '../../contexts/NotificationContext'

const CreateRecepi = () => {
    const {setNotifyMessagge,setNotify} = useContext(NotificationContext)
    const [title,setTitle] = useState('');
    const [imageUrl,setImageurl] = useState('');
    const [description,setDescription] = useState('');
    const History = useHistory();


    const createRecepi = ()=>{
        
        recepiServices.createOneRecepi(title,imageUrl,description).then((resp)=>{
            if(resp.data.messagge) {
                setNotify(true)
               setNotifyMessagge({nMessagge:resp.data.messagge,nCollor:'Red'})
              return  setTimeout(() => {
                setNotify(false)
              }, 2000);  
            } else{
                setNotify(true)
                setNotifyMessagge({nMessagge:resp.data.success,nCollor:'LightGreen'})
                setTimeout(() => {
                    setNotify(false)
                    
                  }, 2000); 
                History.push('/recepies') 
            }
            
        })
        
    }

    return (
        <div className="container-fluid">
            <div className="container-xl">
                <h1 className="create-recepi-header">Create your own recepi:</h1>
                    <form className="create-recepi-form">
                        <label className="create-recepi-lateb"  htmlFor="title">Title:</label>
                        <input className="create-recepi-input" id="title" value={title}  name="title" type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title" />
                        <label className="create-recepi-lateb" htmlFor="imageUrl">ImageUrl:</label>
                        <input className="create-recepi-input" id="imageUrl" value={imageUrl} name="imageUrl" type="text" onChange={(e)=>setImageurl(e.target.value)} placeholder="Enter imageUrl" />
                        <label className="create-recepi-lateb" htmlFor="description">Description:</label>
                        <textarea className="create-recepi-input" id="description"  value={description} name="description"  type="field" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description" />
                    </form>
                    <button className="create-recepi-btn" onClick={createRecepi}>Create</button>
            </div>
            
        </div>
    )
}

export default CreateRecepi
