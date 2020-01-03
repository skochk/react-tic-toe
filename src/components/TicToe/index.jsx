import React, { Component } from 'react';

import styles from './tictoe.scss';

export default class extends Component{
    constructor(props){
      super(props);
      this.state = {
        clickNumber: [0,0,0,0,0,0,0,0,0],
      }
  
      this.addOneNumber = this.addOneNumber.bind(this);
    }
  
    addOneNumber(){
        this.setState((state)=>{
            
            const newlist = state.clickNumber.map(item=>item+1)
            console.log(newlist);
            return{
                newlist,
            };

        })
    }
    render(){
        console.log(this.state.clickNumber)
        return(
        <div className={styles.box}>
            <ul>
                {this.state.clickNumber.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
           
            <button onClick={this.addOneNumber}>+1 for each item</button>
        </div>
        )
    }
}