import { Component, PureComponent } from "react";
import PureComp from "./Pure_Comp";
import RegComp from "./Reg_Comp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "bharat",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "bharat",
      });
    }, 2000);
  }

  render() {
    console.log("---------Parent Comp Render-------------------");
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <PureComp name={this.state.name} /> */}
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
