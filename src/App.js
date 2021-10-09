import Button from '@material-ui/core/Button';
import facezoom from './face-zoom.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={facezoom} className="App-logo" alt="logo" />

        {/* text */}
        <span className="title">
          ✨ Hi, I'm Adriana! ✨
        </span>

        <span className="subtitle">
          📱Android Engineer at Target🎯
        </span>

        <span className="subtitle2">
          Making apps, sometimes websites. Always looking for apartment decor.
        </span>

        <span className="spacing"></span>
        
        {/* buttons */}
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
        <span className="spacing"></span>

        <span className="footer">
          Last updated Oct 8, 2021.
        </span>

      </header>
    </div>
  );
}

export default App;
