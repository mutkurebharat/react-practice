import { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
      console.log("---------Pure Comp Render-------------------");
    return <h1>Pure Component {this.props.name}</h1>;
  }
}

export default PureComp;
