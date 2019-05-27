import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.css";
import "./style.css";
import Clock from "./clock";
function History() {
  let js_history = [
    {
      hist_desc: "JavaScript Date Objects",
      duration: "17 hours ago",
      logo:
        "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/js/js_dates.asp"
    },
    {
      hist_desc: "Array.prototype.reduce() - JavaScript | MDN",
      duration: "a day ago",
      logo:
        "https://www.google.com/s2/favicons?domain=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
    },
    {
      hist_desc: "JavaScript Array indexOf() Method",
      duration: "a day ago",
      logo:
        "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/js/js_dates.asp"
    },
    {
      hist_desc: "JavaScript Array sort() Method",
      duration: "a day ago",
      logo:
        "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/js/js_dates.asp"
    },
    {
      hist_desc: "JavaScript Array filter() Method",
      duration: "a day ago",
      logo:
        "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/js/js_dates.asp"
    },
    {
      hist_desc: "JavaScript Array reduce() Method",
      duration: "a day ago",
      logo:
        "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/js/js_dates.asp"
    }
  ];
  return (
    <div className="container">
      <div id="js_hist">
        <div id="heading">
          <p id="text" className="text-center">
            RELEVANT JAVASCRIPT HISTORY
          </p>
          {js_history.map((value, index) => {
            return (
              <div className="row" id="hist" key={index}>
                <div className="col-9">
                  <p className="text-left">
                    <img src={value.logo} alt="logo" /> {value.hist_desc}
                  </p>
                </div>
                <div className="col-3">
                  <p style={{ color: "#999" }} className="text-right">
                    {" "}
                    {value.duration}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr />

      {/* Clock component  */}

      <br />
      <br />
      <br />
      <br />
      <Clock />
      <h4 className="text-center" style={{ color: "#6272a4" }}>
        {" "}
        {new Date().toDateString()}{" "}
      </h4>
      <p className="text-center" style={{ color: "#6272a4" }}>
        <span aria-hidden="true" class="fa fa-question-circle orangeCol" /> Did
        you know you can add CUSTOM LINKS to display in this section? Open the
        SETTINGS panel and add the URLs of your favorites sites to the 'CUSTOM
        LINKS' textarea.
        <br />
        <span className="orangeCol">
          {" "}
          Got it don't show me this again{" "}
          <i className="fa fa-times orangeCol" />
        </span>
      </p>
    </div>
  );
}

export default History;
