import { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("ClassCLick Component Button Clicked");
  }
  render() {
    return <button onClick={this.clickHandler}>CLass Click</button>;
  }
}

export default ClassClick;
