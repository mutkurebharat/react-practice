import { Component } from "react";

// const UpdatedComponent = (OrignalComponent) => {
//   class NewComponent extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0,
//       };
//     }

//     incrementCount = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };
//     render() {
//       return (
//         <OrignalComponent
//           count={this.state.count}
//           incrementCount={this.incrementCount}
//         />
//       );
//     }
//   }
//   return <NewComponent />;
// };

// export default UpdatedComponent;

// Changing the names
// const WithCounter = (WrappedComponent) => {
const WithCounter = (WrappedComponent, incrementNum) => {
  // passing param to HOC
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        // return { count: prevState.count + 1 };
        return { count: prevState.count + incrementNum }; // passing param to HOC
      });
    };
    render() {
      console.log("HOC -withCounter ", this.props);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
