import React, { Component } from 'react'
import "./ShowComments.css"

export default class ShowComments extends Component {
    constructor(props) {
        super(props)
    
        
       
    }
        
    render() {
        // to fix the user who is comment it
        return (
            
            <div className="show-all-comments">
                <h5 className="username-comentator">user</h5> 
                <p className="username-comment">{this.props.comment}</p>
            </div>
            
        )
    }
}



