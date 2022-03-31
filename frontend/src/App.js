import React  from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', lastName: ''};
  }

  

  handleChange = event => {
    this.setState({value: event.target.value});

    fetch("/name/" + event.target.value)
      .then(response => response.json())
      .then(data => {this.setState({lastName: data.lastName}); console.log(this.state.lastName);})
      .catch(error => {this.setState({lastName: 'User Not Found'}); console.log(this.state.lastName);})
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <p>Manav last name finder</p>
          <input
            type = "text"
            name = "username"
            value = {this.state.value}
            onChange={this.handleChange}
          />
          <p>{this.state.lastName}</p>
        </header>
      </div>
    );
  }
}
export default App;
