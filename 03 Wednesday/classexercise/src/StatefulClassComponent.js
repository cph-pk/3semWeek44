import React from 'react';

// A stateful class component that when clicking a button shows the current time.
class Dateexample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }
  
    render() {
      return (
        <div>
          <p>Date: {this.state.date.toString()}</p>
          <button onClick={() => this.setState({ date: new Date()})}>
            Get date
          </button>
        </div>
      );
    }
  }

  export default Dateexample;