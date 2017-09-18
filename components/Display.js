import React from 'react';
import {render} from 'react-dom';

export default class Display extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <h3>Total : {this.props.totalprice}</h3>
            </div>
        )
    }
}