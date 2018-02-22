import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    this.getHelloApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  getHelloApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getListApi = async () => {
    const response = await fetch('/api/list');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  addMessageApi = async (message) => {
    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');
    const request = new Request('/api/list', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: myHeaders,
    })
    const response = await fetch(request);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  clickHandler() {
    console.log('Button clicked!!');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default App;
