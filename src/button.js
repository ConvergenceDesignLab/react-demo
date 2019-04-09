import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  onClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    const { size } = this.props;
    const { clicks } = this.state;
    const className = size === "big" ? "button-big" : "button";

    return (
      <button onClick={this.onClick} className={className}>
        You've clicked {clicks} times.
      </button>
    );
  }
}

export default Button;
