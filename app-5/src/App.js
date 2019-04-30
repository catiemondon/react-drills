import React, { Component } from "react";
import Image from './Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://i0.wp.com/teamjimmyjoe.com/wp-content/uploads/2019/03/funny-meme-raison-cookie.jpg?resize=620%2C564&ssl=1'} />
      </div>
    );
  }
}

export default App;
