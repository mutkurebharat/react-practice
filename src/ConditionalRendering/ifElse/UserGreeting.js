import { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // **************** if/else *********************
    // if (this.state.isLoggedIn) {
    //   return <h1>Hello Bharat</h1>;
    // } else {
    //   return <h1>Hello Guest</h1>;
    // }

    // *************** element variable ******************

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>Hello Bharat</h1>;
    // } else {
    //   message = <h1>Hello Guest</h1>;
    // }

    // return <div>{message}</div>;

    // *************** Ternary Coditional Operator ******************
    // This can be used inside jsx

    // return this.state.isLoggedIn ? <h1>Hello Bharat</h1> : <h1>Hello Guest</h1>;

    // *************** Short Circuit Operator ******************
    // TSpecial case of ternary COnditional Operator
    // to return something or nothing

    return this.state.isLoggedIn && <h1>Hello Bharat</h1>
  }
}

export default UserGreeting;
