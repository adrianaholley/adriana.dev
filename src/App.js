import facezoom from './face-zoom.png';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Email from '@material-ui/icons/Email';
import Github from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="spacing"></span>

        <div class="glass-card">
          {/* image */}
          <img src={facezoom} className="App-logo" alt="logo" />

          <span className="button-spacing"></span>

          {/* text */}
          <div>
            <span className="title">
              ✨ Hi, I'm Adriana! ✨
            </span>
          </div>

          <div>
            <span className="subtitle">
              📱Android Engineer at Target🎯
            </span>
          </div>

          <span className="tiny-spacing"></span>

          <div style={{lineHeight:.75}}>
            <span className="subtitle2">
              Making apps, sometimes websites. Fan of good design.
            </span>
          </div>

          <span className="button-spacing"></span>
        
          {/* buttons */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.adriapolis.skywaymappgoogle&hl=en_US&gl=US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="neomorphism">
              <span className="button">Skyway Map Minneapolis</span>
            </div>
          </a>
          <span className="button-spacing"></span>

          <a 
            href="https://ttucovid19.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="neomorphism">
              <span className="button">TTUCovid19.com</span>
            </div>
          </a>
          <span className="button-spacing"></span>

          <a 
            href="https://adriana.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="neomorphism">
              <span className="button">adriana.dev</span>
            </div>
          </a>
          <span className="button-spacing"></span>

          <div className="icons">
            <a 
              href="mailto:hello@adriana.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email style={{paddingRight:12}}/>
            </a>

            <a 
              href="https://github.com/adrianaholley"
              target="_blank"
              rel="noopener noreferrer"
            >  
              <Github style={{paddingRight:12}}/>
            </a>

            <a 
              href="https://linkedin.com/in/adrianaholley"
              target="_blank"
              rel="noopener noreferrer"
            >  
              <LinkedIn style={{paddingRight:12}}/>
            </a>

            <a
              href="https://ko-fi.com/adrianaholley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CoffeeIcon/>
            </a>


          </div>
          <span className="small-spacing"></span>

        </div>
      </header>
    </div>
  );
}

export default App;
