import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles.module.scss';

import Item from './Oneitem'

export default class extends Component{
    constructor(props){
      super(props);
      this.state = {
        clickNumber: [0,0,0,0,0,0,0,0,0],
        turn:1, //X = 1, y = 0
      }
  
      this.addOneNumber = this.addOneNumber.bind(this);
    }
  
    addOneNumber(id){
        let value;
        if(this.state.turn == 1){
            value = 1;
            this.state.turn = 0;
        }else{
            value = -1;
            this.state.turn = 1;
        }

        if(this.state.clickNumber[id] === 0){
            const newState = update(this.state, {
                clickNumber: {
                        [id]: { $set: value}
                    }
            });
            this.setState(newState);
        }
         
    }

    checkX(){
      let array = this.state.clickNumber;
      let currentArray1 = array[0] + array[3] + array[6];
      let currentArray2 = array[1] + array[4] + array[7];
      let currentArray3 = array[2] + array[5] + array[8];
      
       if(Math.abs(currentArray1) == 3 || Math.abs(currentArray2) == 3 || Math.abs(currentArray3) == 3){
        let tempArray =[];
        tempArray.push(currentArray1,currentArray2,currentArray3);
        tempArray.sort();
        console.log(tempArray);
        if(tempArray[2] == 3) return 1
        if(tempArray[0] == -3) return 2
        
       } else {
           return 0
       }
    }
    checkY(){
        let array = this.state.clickNumber;
        let currentArray1 = array[0] + array[1] + array[2];
        let currentArray2 = array[3] + array[4] + array[5];
        let currentArray3 = array[7] + array[6] + array[8];
        
         if(Math.abs(currentArray1) == 3 || Math.abs(currentArray2) == 3 || Math.abs(currentArray3) == 3){
          let tempArray =[];
          tempArray.push(currentArray1,currentArray2,currentArray3);
          tempArray.sort();
          console.log(tempArray);
          if(tempArray[2] == 3) return 1
          if(tempArray[0] == -3) return 2
          
         } else {
             return 0
         }
      }

      checkDiago(){
          
        let array = this.state.clickNumber;
        if(this.state.clickNumber[4]==0){
            return 0 
        }else{
            let currentArray1 = array[0] + array[4] + array[8];
            let currentArray2 = array[2] + array[4] + array[6];
            if(Math.abs(currentArray1) == 3 || Math.abs(currentArray2) == 3){
                let tempArray =[];
                tempArray.push(currentArray1,currentArray2);
                tempArray.sort();
                console.log(tempArray);
                if(tempArray[1] == 3) return 1
                if(tempArray[0] == -3) return 2
        }
      }
    }

    render(){
        const a = this.checkX()
        const b = this.checkY();
        const c = this.checkDiago()
        console.log("c="+ c);
        if(a === 1 || b === 1 || c === 1) return(<div>X WON</div>) 
        if(a === 2 || b === 2 || c === 2) return(<div>O WON</div>);
        return(
        <>
            {
            <div className={styles.box}>
                
                    {this.state.clickNumber.map((item, idx) => (
                    <Item item={item} idx={idx} changestate={this.addOneNumber}/>
                    ))}
            </div>}
        </>
        )
    }
}