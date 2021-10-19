import React, { Component } from "react";
import "./styles/homeAndMail.css";
import Subscribe from "./ComingSoon/subscribe";

class Home extends Component {
  //     // these buttons are not needed
  // /*
  //     const handleClick = (e) => {
  //         console.log('sdafasdfasdf', e)
  //     }
  //     const handleClickAgain = (name) => {
  //         console.log(name)
  //     }

  // */

  state = {
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit",
    },
  };

  render() {
    const { subscribe } = this.state;

    // want to destructure state because we dont wanna do this.state. ... each time so we can just do countdown and all
    return (
      <div className="home">
        <body className="bodyofmail">
          <div className="home-page-div">
            <h2> Anhad Magazine</h2>
            <h1>Anhd</h1>
            <p>a student-run sikh sprint and multimedia magazine</p>
            <p>inspiring a new wave of sikh literacy</p>
            <p>and connectedness to our guru</p>
            <div className="blankspace"></div>
            <Subscribe
              placeholder={subscribe.placeholder}
              buttonText={subscribe.buttonText}
            ></Subscribe>
          </div>
        </body>
        <div className="arrow">╲╱</div>
      </div>
    );
  }
}

export default Home;
