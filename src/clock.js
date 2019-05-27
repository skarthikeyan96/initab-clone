import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      // time: new Date().toLocaleString()
      time: new Date().toTimeString().split(" ")[0]
    });
  }
  render() {
    return (
      <h1 className="App-clock text-center" style={{ color: "#6272a4" }}>
        {this.state.time}
      </h1>
    );
  }
}

export default Clock;
