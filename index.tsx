import React, { Component } from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import './style.css'
import { Customer } from "./Customer";

interface AppProps { }
interface AppState {
  name: string;
}

class CustomerComponent extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = new Customer("toto")
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    )
  }
}

render(<CustomerComponent />, document.getElementById('root'));
