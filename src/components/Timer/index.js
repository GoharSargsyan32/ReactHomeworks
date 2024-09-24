import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount () {
    this.intervalId = setInterval(()=> {
        console.log("setInterval is working")
        this.setState({
            count: this.state.count + 1
        })
    },1000);
  };

  componentWillUnmount () {
    clearTimeout(this.intervalId);
  }

  render() {
    return <div>
        <h2>count:{this.state.count}</h2>
    </div>;
  }
}

export default Timer;
