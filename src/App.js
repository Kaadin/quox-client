import './App.css';
import { Component } from 'react';
import background from "./img/space.png";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ping: ''
    }
  }

  ping = async () => {
    var response = await fetch(
      'api/ping',
      {
        method: 'get'
      }
    );

    var responseJson = await response.json();
    
    this.setState({
      ping: responseJson.val
    })
  }

  render() {
    const pingr = this.state.ping;

    return (
        <div className='App'>
        <img src={background} className="App-logo" alt="logo" />
          <button onClick={this.ping}>Ping</button>
          <div>
            <label>{pingr}</label>
          </div>
        </div>
    )
  }
}

export default App;
