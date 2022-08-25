import { Component } from "react";
import WithCounter from "./WithCounter";

class HoverCounterPart2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>;
  }
}
export default WithCounter(HoverCounterPart2, 10); // passing param to HOC
