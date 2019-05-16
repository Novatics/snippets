import React, { Component } from 'react';

class WithoutHooks extends Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    return (
    <div>
      Count: {count} <br />
      <button onClick={() => this.setState({ count: count + 1})}>Add</button>
    </div>
    )
  }
}

export default WithoutHooks;
