import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board: ["","","","","","","","","",],
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        Welcome to Tic-Tac-Toe</header>
      {this.state.board.map(cell => <p>cell</p>)}
      </div>
    );
  }
}

export default App;
