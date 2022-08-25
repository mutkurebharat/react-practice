import { Component } from "react";

class User extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         name: 'Bharat'
    //     }
    // }
  render() {
    return <h1>{this.props.render(false)}</h1>;
  }
}

export default User;
