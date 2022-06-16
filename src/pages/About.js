import React, { Component } from 'react';
import "./About.css";
import picofme from "../assets/picofme.jpg";
  
export default class About extends Component {
  render() {
    return (
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={picofme}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title text-center">Gianni Tipan</div>
            <div className="brief_description">
              <b>Rising Sophomore studying CS @ MIT 💻</b><br></br><br></br>
              <b>Raised in Miami 🌃</b><br></br><br></br>
              <b>Interests:</b>
              <li>
                Travel vlogs 📹
              </li>
              <li>
                Latin American literature 📖
              </li>
              <li>
                Music 🎶
              </li>
              <li>
                Biking 🚲
              </li>
            </div>
          </div>
        </div>
      </div>
    )
  }
}