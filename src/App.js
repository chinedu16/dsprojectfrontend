import React, { Component } from 'react';
import App1 from './routes/routes';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Orders <span s>Science</span> </h1>
          <span> Making Orders simplified </span>
        </header>
        <App1 />
        
      </div>
    );
  }
}

export default App;
