import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTimeString()
      // time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: this.getTimeString()
      // time: new Date().toLocaleString()
    });
  }

  getTimeString() {
    return new Date().toLocaleTimeString();
  }

  render() {
    return (
      <span className="clock">
        {this.state.time}
      </span>
    );
  }
}

export default Clock;