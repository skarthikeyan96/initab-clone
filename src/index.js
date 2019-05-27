import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sidebar";
import RedditBar from "./RedditBar";
import History from "./History";
import "./bootstrap.css";
import "./style.css";

function Github() {
  let issues_hist = [
    {
      Repo_name: "Repo Code-wars.com",
      Issue_no: "#25714 ",
      desc: "Issue fixing the delay"
    },
    {
      Repo_name: "Repo facebook/create-react-app",
      Issue_no: "#35675 ",
      desc: "custom env variables not defined"
    },
    {
      Repo_name: "Repo reactjs",
      Issue_no: "#3 ",
      desc: "Gatsby"
    },
    {
      Repo_name: "PokeApi",
      Issue_no: "#383 ",
      desc: "Search for a pokemon"
    },
    {
      Repo_name: "Babel",
      Issue_no: "#522 ",
      desc: ".babel_rc not working"
    }
  ];

  return (
    <div className="container" id="github-hist">
      <div id="heading">
        <p id="text" className="text-center">
          <span
            aria-hidden="true"
            style={{ color: "#8be9fd" }}
            className="fa fa-github-alt"
          />
          {"  "}
          GITHUB ISSUES HISTORY
          <br />
          <small> switch to gitlab </small>
          <hr />
        </p>
      </div>
      <div id="github-hist-body">
        <p id="tabs" style={{ color: "#f1fa8c" }}>
          {" "}
          ISSUES <span style={{ color: "#ff79c6" }}>PULL REQUEST</span>
        </p>

        {issues_hist.map((value, index) => {
          return (
            <div key={index}>
              <blockquote>
                <p style={{ color: "#6272a4" }}>
                  {value.Repo_name}
                  <br />
                  <span style={{ color: "#f1fa8c" }}>{value.Issue_no}</span>
                  <br />
                  <span style={{ color: "#fff" }}>{value.desc}</span>
                </p>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function App() {
  return (
    <div id="Main" className="container-fluid">
      <div className="row">
        <div className="col-md-2" id="sidebar">
          <Sidebar />
        </div>
        <div className="col-md-3">
          <RedditBar />
        </div>
        <div className="col-md-5">
          <History />
        </div>
        <div className="col-md-2">
          <Github />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
