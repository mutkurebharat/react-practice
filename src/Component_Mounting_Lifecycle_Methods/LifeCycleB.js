import { Component } from "react";

class LifeCycleB extends Component {
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
  render() {
    console.log("LifeCycleB render");
    return <h1>LefeCycle B</h1>;
  }
}

export default LifeCycleB;
