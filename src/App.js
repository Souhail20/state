import './App.css';
import React from 'react';
import logo from './logo.jpg';
class App extends React.Component {
   state  = 
   {
    Person : [
    {FullName:'Souhail khaled'}, 
    {Bio:'Hi iam Souhail  Khaled and this is my profile'},
    {Profession:'Fullstack Developer' },
    {imgSrc:logo}],
    toggle:false,count:0
  };
  handleClick = () =>{
    {this.setState({ toggle: !this.state.toggle })}
  }
  componentDidMount(){
    this.timerId = setInterval(() =>
    this.setState({count: this.state.count+1,}),1000
    );
  }
        render(){   
          return (        
            <div className="App">
           <button className="btn" onClick={this.handleClick}>
             {this.state.toggle ? "Hide List" : "Show List"} 
           </button>
           {this.state.toggle ?
           <>
          {this.state.Person.map(el => <div>
           <h2>{el.FullName}</h2>
           <h2>{el.Bio}</h2>
           <h2>{el.Profession}</h2>
           <img src={el.imgSrc}/>
           </div>)}
            <h1>{this.state.count}</h1>
            </>
           :null}
           
            </div>
         )};
        
         
         
}


export default App;
