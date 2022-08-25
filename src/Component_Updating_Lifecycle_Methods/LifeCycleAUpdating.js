import { Component } from "react";
import LifeCycleBUpdatig from "./LifeCycleBUpdating";

class LifeCycleAUpdatig extends Component {
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

  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponentUpdate");
    return true;
    // return false;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Code Evolution",
    });
  }
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <h1>LefeCycle A</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleBUpdatig />
      </div>
    );
  }
}

export default LifeCycleAUpdatig;
