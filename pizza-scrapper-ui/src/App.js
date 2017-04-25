import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

//var counter = 0;
var state = {counter : 0};


function appLogic(state,action){
    if(action.type==="INC"){
      // state.counter++;
      return{
        counter: state.counter+1
      };
    } else if(action.type==="DEC"){
      //state.counter--;
      return{
        counter: state.counter-1
      };
    }

    return state;
}



function handler(action){

  state = appLogic(state,action);
  ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
  );

}

function Hello({name, counter}){
 // let name=props.name; pt function Hello(props)

  return(
    <div>
     <div>Hello {name} {counter}</div>
     <button onClick={()=>handler({type: "INC"})}>Click me(Inc) </button>
      <button onClick={()=>handler({type: "DEC"})}>Click me(Dec) </button>
    </div>
  );
}

//console.log(Hello({name : "blabla"}));



function App({state}){
    return (
      <div className="App">
        <Hello name="blabla" counter={state.counter}/>  
      </div>
    );
}

handler({type: "INIT"})

export default App;
