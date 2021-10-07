import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import facezoom from './face-zoom.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={facezoom} className="App-logo" alt="logo" />

        <p>Adriana Holley</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android Engineer at Target
        </a>         

        <Button variant='outlined'>About</Button>
        <Button variant='outlined'>Experience</Button>
        <Button variant='outlined'>Projects</Button>     

        <a>Work in Progress. Last updated Oct 6, 2021.</a>

      </header>
    </div>
  );
}

export default App;
