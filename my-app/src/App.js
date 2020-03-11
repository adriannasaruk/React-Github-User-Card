import React from 'react';
import './App.css';
import axios from "axios"
import Card from "./Components/Card"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        mydata : [],
        followers: []
    }
  }
  
  

  componentDidMount () {
    axios.get("https://api.github.com/users/adriannasaruk")
    .then(res => {
      console.log(res.data)
      this.setState ({
        mydata: res.data
      })
      
    })
    .catch (err => console.log (err.message))

    //followers axios call
    axios.get("https://api.github.com/users/adriannasaruk/followers") 
      .then(res => {
      
        this.setState ({
         followers: res.data
        })
        console.log(this.state.followers)
      })
      .catch(err => (err.message))
    }
  
  
    render() {
      return (
        <div>
            <Card item ={this.state.mydata} />
            {this.state.followers.map (item => {
             {console.log(item)}
            return( <Card item= {item} />
    )})}
        </div>
        
      );
    }
  }

  

export default App;
