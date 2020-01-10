import React, { Component } from 'react';


export default function(props){
    let value;
    if(props.item==1){
        value = 'X'
    }else if(props.item==-1){
        value = 'O';
    }
    else{
        value = '...';
    }
    return(
        <div>
            <div>{props.idx} </div>
            <button onClick={()=>{props.changestate(props.idx)}}>{value}</button>
        </div>
    
    );

}