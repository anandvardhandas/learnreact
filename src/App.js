import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Basic, {Add} from './BasicComponent';
// import Header from './HeaderComponent';
import CourseList from './CoursesListComponent';
//import * as All from './BasicComponent';

class App extends React.Component{
  firstmsg = "First Message from class field";
  secondmsg = "Second Message from class field";
  messages = [
    {name:"Anand", likes: 200 },
    {name:"Vardhan", likes: 324 },
    {name:"Das", likes: 20250 }
  ];
  render(){
    //return <h2>hello world!! and {this.props.msg}</h2>
    //var basicCompInstance = React.createElement(BasicComponent);
    //return basicCompInstance;

    //return <div>
      {/* <Basic message="first message"></Basic>
      <br />
      <Basic message="second message"></Basic>
      <br />
      <Add></Add> */}

      {/* <Basic message={this.firstmsg}></Basic>
      <br />
      <Basic message={this.secondmsg}></Basic>
      <br />
      <Add></Add> */}
      //</div>

      
return <div>
  <CourseList />
</div>
      

    
  }
}


export default App;
