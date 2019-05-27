import React from "react";
import ReactDOM from "react-dom";

import "./bootstrap.css";
import "./style.css";

function Sidebar() {
  return (
    // <div className="jumbotron">
    <div className="container-fluid">
      <div className="row" id="top">
        <ul className="list-group">
          <li className="list-group-item">
            <i className="fa fa-wrench" aria-hidden="true" /> SETTINGS{" "}
          </li>
          <li className="list-group-item">
            <i className="fa fa-code" aria-hidden="true" /> GIST{" "}
          </li>
          <li className="list-group-item">
            <i className="fa fa-stack-overflow" /> STACK OVERFLOW{" "}
          </li>
          <li className="list-group-item">
            <i className="fa fa-line-chart" aria-hidden="true" /> TRENDING{" "}
          </li>
          <li className="list-group-item">
            <i className="fa fa-sticky-note" aria-hidden="true" /> SCRATCH PAD{" "}
          </li>
          <li className="list-group-item">
            <i className="fa fa-lightbulb-o" aria-hidden="true" /> PLAYGROUND{" "}
            <i className="fa fa-lock" aria-hidden="true" />
          </li>
          <li className="list-group-item">
            <i className="fa fa-question" aria-hidden="true" /> HELP/INTRO{" "}
          </li>
        </ul>
      </div>
      <br />

      <div className="container" id="bottom">
        
          <img
            src="https://initab.com/assets/images/initab_logo.png"
            className="img img-responsive"
            id="logo"
            alt="logo"
          />
        
		<br/>
        
          <a className="btn btn-primary" id="github"  href="https://github.com/skarthikeyan96">
            {" "}
            <i className="fa fa-github" />
          </a>
          <button className="btn btn-primary" id="twitter">
            {" "}
            <i className="fa fa-twitter" />
          </button>
          <button className="btn btn-primary" id="linkedin">
            {" "}
            <i className="fa fa-linkedin" />
          </button>
          <button className="btn btn-primary" id="reddit">
            {" "}
            <i className="fa fa-reddit" />
          </button>
        
      </div>
      <br />
    </div>
    // </div>
  );
}

export default Sidebar;
