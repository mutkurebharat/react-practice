import { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";

class ParentMemoComp extends Component {
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
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentMemoComp;
