import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: 'reader'
        }
    }

    handleNameChange = (event) => {
        const value = event.target.value;
        this.setState({
            name: value
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, {this.state.name}!</h1>
                <input
                    type={'text'}
                    placeholder={'Your name here'}
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
            </div>
        );
    }
}

export default App;
