import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board: ["","X","","","O","","","X","",],
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        Welcome to Tic-Tac-Toe</header>
      <div>
        {this.state.board.map((cell) => <p>{cell}</p>)}
      </div>
      </div>
    );
  }
}

export default App;
