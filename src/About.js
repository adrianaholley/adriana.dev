import React, { Component } from 'react';
import facezoom from './face-zoom.png';
// import CoffeeIcon from '@mui/icons-material/Coffee';
import Email from '@material-ui/icons/Email';
import Github from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
// import { Link } from 'react-router-dom';
import strings from './strings';

class About extends Component {
    render() {
        return (
            <header className="App-header">
                <span className="spacing"></span>

                <div class="glass-card">
                {/* image */}
                <img src={facezoom} className="App-logo" alt="logo" />

                <span className="button-spacing"></span>

                {/* text */}
                <div>
                    <span className="title">
                    {strings.hi}
                    </span>
                </div>

                <div>
                    <span className="subtitle">
                    {strings.job_description}
                    </span>
                </div>

                <span className="tiny-spacing"></span>

                <div style={{lineHeight:.75}}>
                    <span className="subtitle2">
                    {strings.self_description}
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
                    <span className="button">{strings.button_mpls_app}</span>
                    </div>
                </a>
                <span className="button-spacing"></span>

                {/* buttons */}
                <a 
                    href="https://play.google.com/store/apps/details?id=com.adriapolis.skywaymapstpaul&hl=en_US&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="neomorphism">
                    <span className="button">{strings.button_st_paul_app}</span>
                    </div>
                </a>
                <span className="button-spacing"></span>

                <a 
                    href="https://ttucovid19.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="neomorphism">
                    <span className="button">{strings.button_ttu_site}</span>
                    </div>
                </a>
                <span className="button-spacing"></span>

                <a 
                    href="https://adriana.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="neomorphism">
                    <span className="button">{strings.button_personal_site}</span>
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
                    {/* <CoffeeIcon/> */}
                    </a>

                </div>
                
                <span className="small-spacing"></span>

                </div>

                <div style={{lineHeight:.85}}>
                <span className="subtitle2">
                    {strings.coffee_intro}
                </span>
                </div>

                <div style={{lineHeight:.85}}>
                <span className="subtitle2">
                    <b>
                    <a
                        href="https://ko-fi.com/adrianaholley"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {strings.coffee_text}
                    </a>
                    {/* <Link to='/contact'>
                        contact
                    </Link>
                    <Link to='/acl'>
                        concert
                    </Link> */}
                    </b>
                </span>
                </div>

                <ul class='circles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
            </header>
        );
    } 
}

export default About;  