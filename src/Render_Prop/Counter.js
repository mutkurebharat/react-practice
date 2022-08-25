import { Component } from "react";

class RenderPropCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((PrevState) => {
      return { count: PrevState.count + 1 };
    });
  };
  render() {
    return (
      // <div>{this.props.render(this.state.count, this.incrementCount)}</div>
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default RenderPropCounter;