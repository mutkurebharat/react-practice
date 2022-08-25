import { Component } from "react";
import ChildComponent from "./childComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(msg) {
    // alert(`Hello ${this.state.parentName}`);
    alert(`Hello ${this.state.parentName} from ${msg}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
