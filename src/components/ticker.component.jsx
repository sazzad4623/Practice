import React, { Component } from "react";
import "./ticker.css";

export default class Ticker extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Horizontal News Ticker Example</title>
        <meta name="author" content="Codeconvey" />
        {/* News Ticker CSS */}
        <link rel="stylesheet" href="css/style.css" />
        {/*Only for demo purpose - no need to add.*/}
        <link rel="stylesheet" href="css/demo.css" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .box{\n            width: 500px;\n          \n        }\n    \n    ",
          }}
        />
        <div className="ScriptTop">
          <div className="rt-container">
            <div className="col-rt-4" id="float-right">
              {/* Ad Here */}
            </div>
            <div className="col-rt-2">
              <ul>
                <li>
                  <a
                    href="https://codeconvey.com/horizontal-news-ticker-css"
                    title="Back to tutorial page"
                  >
                    Back to Tutorial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <header className="ScriptHeader">
          <div className="rt-container">
            <div className="col-rt-12">
              <div className="rt-heading">
                <h1>CSS Horizontal News Ticker Example</h1>
                <p>A pure CSS horizontal news ticker based on CSS animation.</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="rt-container">
            <div className="col-rt-12">
              <div className="Scriptcontent">
                <div className="ticker-wrap">
                  <div className="ticker">
                    <div className="ticker__item">
                      Letterpress chambray brunch.
                    </div>
                    <div className="ticker__item">
                      Vice mlkshk crucifix beard chillwave meditation hoodie
                      asymmetrical Helvetica.
                    </div>
                    <div className="ticker__item">
                      Ugh PBR&amp;B kale chips Echo Park.
                    </div>
                    <div className="ticker__item">
                      Gluten-free mumblecore chambray mixtape food truck.{" "}
                    </div>

                    <div className="ticker__item">
                      12345678976543211wertyioojmkklllhjnjklllljmhhh67890987655432123344556778888
                      678899000000--98764rewsefghjkkkkjhhygrrtt543221tyuiikkioolkmkkkkknjnhjjkjkkllop
                      ttyujhjkjlll890653422rgbnmmkloopp
                      12345678976543211wertyioojmkklllhjnjklllljmhhh67890987655432123344556778888
                    </div>
                    {/*<div class="ticker__item">Authentic bitters seitan pug single-origin coffee whatever.</div>
  <div class="ticker__item">Letterpress chambray brunch.</div>
  <div class="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
  <div class="ticker__item">Ugh PBR&B kale chips Echo Park.</div>
  <div class="ticker__item">Gluten-free mumblecore chambray mixtape food truck. </div>
  <div class="ticker__item">Authentic bitters seitan pug single-origin coffee whatever.</div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Analytics */}
      </div>
    );
  }
}
