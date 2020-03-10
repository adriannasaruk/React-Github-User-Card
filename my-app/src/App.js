import React from 'react';
import './App.css';
import axios from "axios"
import Card from "./Components/Card"

class App extends React.Component {
  
  state = {
      mydata : [],
    }
  
  

  componentDidMount () {
    axios.get("https://api.github.com/users/adriannasaruk")
    .then(res => {
      console.log(res.data)
      this.setState ({
        mydata: [res.data].flat()
      })
      
    })
    .catch (err => console.log (err.message))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mydata !== this.state.mydata) {
      axios.get("https://api.github.com/users/adriannasaruk/followers")
      .then(res => {
      
        this.setState ({
         mydata: res.data
        })
      })
      .catch(err => (err.message))
    }
  }



    render() {
      
      return (
        <div>
            {this.state.mydata.map (item => (
            <Card item= {item} />
            ))}
        </div>
        
      );
    }
   
}

  

export default App;
