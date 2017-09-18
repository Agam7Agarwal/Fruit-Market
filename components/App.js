/**
 * Created by Agam on 9/14/2017.
 */
import React from 'react';
import Form from './Form';
import Showcart from './Showcart';
import Display from './Display'

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {
            list : [],
            totalprice : 0,
            showtable : false,
        };

        this.addtolist = this.addtolist.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.trash = this.trash.bind(this);
        this.total = this.total.bind(this);
    }

    addtolist(fruitname,price){

        let {list} = this.state;
        let obj = {fruitname : fruitname, price:price , quantity : 1 , actualprice : price };
        list.push(obj);
        this.setState({list : list,
                showtable : true,
        });
        this.total();
    }

    increase(i){
      let { list } = this.state;
      let inclist = list.map((item, index) => {
         if(i === index) {
             item.quantity += 1;
             item.price =  item.actualprice * item.quantity;
         }
         return item;
      });
      this.setState({ list: inclist });
        this.total();
    }

    decrease(i){
        let { list } = this.state;
        let declist = list.map((item, index) => {
            if(i === index && item.quantity >1) {
                item.quantity -= 1;
                item.price -= item.actualprice;
            }
            return item;
        });
        this.setState({ list: declist });
       this.total();
    }

    trash(i) {
        let {list} = this.state;
        list.splice(i,1);
        if(i === 0 && this.state.list.length === 0){
            this.setState({
                showtable : false
            })
        }
        this.setState({list})
        this.total();
    }

    total(){
        let {list} = this.state;
        let totalval = 0;
        for (let i=0 ; i<list.length ; i++){
            totalval += parseInt(list[i].price);
        }
        this.setState({
            totalprice:totalval,
        })
    }

    render(){
        return(
            <div>
                <Form addtolist={this.addtolist}/>
                {this.state.showtable ?
                <Showcart displaylist={this.state.list}
                          increase={this.increase}
                          decrease={this.decrease}
                          trash={this.trash}/>
                : <span></span>}
                <Display totalprice={this.state.totalprice}/>
            </div>
        )
    }
}