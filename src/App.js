import logo from './logo.svg';
import './App.css';

function App () {
    return (
      <div className="App">
        <header className="App-header">
          {/* Creating the form */}
          <form>
      <label>
        First Name:
        <input type='text' firstName="firstName" />
      </label>
      <br></br>
      <label>
        Last Name:
        <input type='text' lastName="lastName" />
      </label>
      <br></br>
      <label>
        Employee ID Number:
        <input type='number' phoneNumber="phoneNumber" />
      </label>
      <br></br>
      <label>
        Phone Number - DUO:
        <input type='number' phoneNumber="phoneNumber" />
      </label>
      <br></br>
      <input type='submit' value="Submit" />
    </form>
          <p>
            Edit src/App.js and save to reload. </p> <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> </header> </div> ); }

export default App;
