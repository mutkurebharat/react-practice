import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comment: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
    this.setState({
      userName: "",
      comment: "",
      topic: "react", 
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </div>

        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>

        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
