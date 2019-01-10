import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: '',
    }
  }

  getData = () => {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(function(response) {
         return response.json()
      })
      .then((result) => {
        this.setState({ user: result })
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }

  render() {
    console.log('user: ', this.state.user)
    if (!this.state.user) {
      return (
        <div>
            <Link to="/about/">About</Link>
          <input onChange={e => this.setState({ username: e.target.value })} />
          <button onClick={() => this.getData()} />
        </div>
      )
    }

if(!this.state.user.login && this.state.user.message) {
  return <p>{this.state.user.message}</p>
}

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.user.avatar_url} className="App-logo" alt="logo" />
          <p>
            Name: {this.state.user.login}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

