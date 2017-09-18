import React from 'react';
import {render} from 'react-dom';

export default class Form extends React.Component{

    constructor(){
        super();

        this.state={
            fruitname: '',
            price: ''
        };

        this.handler = this.handler.bind(this);
    }

    handler(e){
        let inputtext = e.target.value;
        this.setState({
            fruitname: inputtext.split('-')[0],
            price: inputtext.split('-')[1]
        });
    }

    componentDidMount(){
        this.focusinput.focus();
    }

    render (){
        return(
            <div>
                <div className="container">
                    <h2>My Cart</h2>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="mycart"
                                       ref={(input) => { this.focusinput = input; }}
                                       placeholder="Enter Item and Price seperated by -(hyphen)"
                                       name="mycart" onChange={this.handler}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <button type="button" onClick={ this.props.addtolist.bind(this,this.state.fruitname, this.state.price)} className="btn btn-danger">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}