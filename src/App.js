import React from 'react';
import MoviesList from "./components/MoviesList"
import './App.css'

class App extends React.Component {

  state = {
    category: ''
  }

  handleChange = (e) => {
    this.setState({category: e.target.value})
  }

  render() {
  return (
    <div className="App">
          <select className="app-select" onChange={this.handleChange}>
            <option id="Default"></option>
            <option id="Comedy">Comedy</option>
            <option id="Animation">Animation</option>
            <option id="Thriller">Thriller</option>
            <option id="Drame">Drame</option>
          </select>
   <MoviesList category={this.state.category}/>
    </div>
  );
}
}
export default App;