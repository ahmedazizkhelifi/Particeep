import React from "react"
import { MoviesList, Card } from "./components"
import "./App.css"

class App extends React.Component {
  state = {
    category: ""
  }

  handleChange = (e) => {
    this.setState({ category: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="section__padding select-container">
          <select className="app-select" onChange={this.handleChange}>
            <option id="Default">All</option>
            <option id="Comedy">Comedy</option>
            <option id="Animation">Animation</option>
            <option id="Thriller">Thriller</option>
            <option id="Drame">Drame</option>
          </select>
        </div>

        <div className="section__padding">
          <MoviesList category={this.state.category} />
        </div>
      </div>
    )
  }
}
export default App
