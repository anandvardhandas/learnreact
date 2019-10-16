import React from 'react';
export default class BasicComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }

    render(){
      return <React.Fragment> 
          <p>Name: {this.props.message.name}</p>
          <p>Likes: {this.props.message.likes}</p>
          <p>Likes From Calling method: {this.props.likes}</p>
      </React.Fragment>;
    }
  }

  export function Add(){
    return "add method";
  }