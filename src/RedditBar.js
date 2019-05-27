import React from "react";
import ReactDOM from "react-dom";

import "./bootstrap.css";
import "./style.css";

function RedditBar() {
  let reddit_hist = [
    {
      description:
        "WebAssembly at eBay: A Real-World Use Case (Barcode scanning with WASM)",
      posted_by: "u/itsmemielophone",
      reddit_score: "168"
    },
    {
      description:
        "I wrote a HTTP client for micro frontend architecture. Now we started to use it on every Node.js project",
      posted_by: "u/acanguven",
      reddit_score: "68"
    },
    {
      description:
        "Are Redux and MobX still worth learning for new React projects?",
      posted_by: "u/IanAbsentia",
      reddit_score: "5"
    },
    {
      description:
        "Secrets of JavaScript: a tale of React, performance optimization and multi-threading",
      posted_by: "u/leofab865",
      reddit_score: "14"
    },
    {
      description:
        "I created a Open Weather Map cache server using Nodejs and Typescript",
      posted_by: "u/iainmoncrief",
      reddit_score: "7"
    }
  ];
  return (
    <div className="container" id="red">
      <div id="heading">
        <p id="text">
          {" "}
          <i className="fa fa-reddit" /> POPULAR ON R/JAVASCRIPT
        </p>
      </div>

      <div className="reddit-news">
        {reddit_hist.map((value, index) => {
          return (
            <div key={index}>
              <blockquote>
                <p style={{ color: "#fff" }}>
                  {value.description}
                  <br />
                  <span style={{ color: "#f1fa8c" }}>
                    <span style={{ color: "#66d9ef" }}>Posted By</span> :{" "}
                    {value.posted_by}
                  </span>
                  <br />
                  <span style={{ color: "#6272a4" }}>
                    Reddit Score : {value.reddit_score}
                  </span>
                </p>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RedditBar;
