import { Component } from "react";
import WithCounter from "./WithCounter";

class ClickCounterPart2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    console.log("props = ", this.props);
    return (
      <button onClick={incrementCount}>
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}
export default WithCounter(ClickCounterPart2, 5); // passing param to HOC
