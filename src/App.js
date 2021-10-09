import Button from '@material-ui/core/Button';
import facezoom from './face-zoom.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={facezoom} className="App-logo" alt="logo" />

        <span className="title">
          ✨ Hi, I'm Adriana! ✨
        </span>

        <span className="subtitle">
          Android Engineer at Target
        </span>

        <span className="subtitle2">
          Freelance Android app developer | Freelance Snapchat filter designer
        </span>

        <span className="spacing"></span>
        
        <div class="neomorphism">
          <span className="button">Skyway Map Minneapolis</span>
        </div>
        <span className="button-spacing"></span>

        <div class="neomorphism">
          <span className="button">TTUCovid19.com</span>
        </div>
        <span className="button-spacing"></span>

        <div class="neomorphism">
          <span className="button">SquareSquare</span>
        </div>

        <span className="spacing"></span>

        <span className="footer">
          Work in Progress. Last updated Oct 8, 2021.
        </span>

      </header>
    </div>
  );
}

export default App;
