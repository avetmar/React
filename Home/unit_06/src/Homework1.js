import React from "react";

class Homework1 extends React.Component {
  constructor(props) {
    super();

    console.log("props ", props);

    this.state = {
      s1: props.p1,
    };

    this.s2 = 201;
  }

  componentDidMount() {
    let val = this.state.s1;
    val += 5;
    this.setState({ s1: val });

    let val2 = this.s2;
    val2 += 5;
    this.s2 = val2;
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val += 50;
    this.setState({ s1: val });

    let val2 = this.s2;
    val2 += 50;
    this.s2 = val2;
  };

  render() {
    return (
      <>
        <div>State s1: {this.state.s1}</div>
        <div>Property s2: {this.s2}</div>
        <button onClick={this.buttonHandler}>Button</button>
      </>
    );
  }
}

export default Homework1;
