import React from 'react';
import {render} from 'react-dom';

export default class Showcart extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
                <div className="container" style={{ height: '200px' ,overflow: 'scroll'}}>

                    <table className="table table-striped shrink">
                        <thead>
                        <th> FruitName</th>
                        <th> Price</th>
                        <th> Quantity</th>
                        </thead>
                        <tbody>
                        {this.props.displaylist.map((item, i) =>
                            <tr key={i}>
                                <td>{item.fruitname}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td><span className="glyphicon glyphicon-plus" onClick={this.props.increase.bind(this,i)}> </span></td>
                                <td><span className="glyphicon glyphicon-minus" onClick={this.props.decrease.bind(this,i)}> </span></td>
                                <td><span className="glyphicon glyphicon-trash" onClick={this.props.trash.bind(this,i)}> </span></td>
                            </tr>
                        )}
                        </tbody>
                    </table>

                </div>
        )
    }
}