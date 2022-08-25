import { Component } from "react";

class LifeCycleBUpdatig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "bharat",
    };

    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(porps, state) {
    console.log("LifeCycleB static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }
  render() {
    console.log("LifeCycleB render");
    return (
      <div>
        <h1>LifeCycle B</h1>
      </div>
    );
  }
}

export default LifeCycleBUpdatig;
