import { Component } from "react";
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "bharat",
    };

    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(porps, state) {
    console.log("LifeCycleA static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }

  render() {
    console.log("LifrCycleA render");
    return (
      <div>
        <h1>LefeCycle A</h1>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
