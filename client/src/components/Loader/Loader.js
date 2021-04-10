import React from 'react'
import "./Loader.css";


//this is loader which shows before data from server load
const Loader = () => {

    return (
        <>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       </>
    )
}

export default Loader
