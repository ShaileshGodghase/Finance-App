import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>
          FinanceApp helps United States of America Stock market traders and
          investors do their own research and make better decisions by providing
          them with end-of-day analytics and visualizations and alerts.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              style={{ width: "40%" }}
              src="data:image/png;base64,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"
              alt="Shailesh"
            />
            <div className="container">
              <h2>Shailesh Godghase</h2>
              <p className="title">Team Leader and developer</p>
              <p>B.Tech (CSE)</p>
              <p>
                <button className="button">
                  <a href="mailto:shaileshgodhghase" rel="noreferrer">
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              style={{ width: "40%" }}
              src="data:image/jpeg;base64,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"
              alt="parikshit"
            />
            <div className="container">
              <h2>Parikshit Chavan</h2>
              <p className="title">Junior Developer</p>
              <p>B.Tech (CSE)</p>
              <p>
                <button className="button">
                  <a href="mailto:parikshit2097@gmail.com" rel="noreferrer">
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              style={{ width: "40%" }}
              src="data:image/png;base64,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"
              alt="Raj"
            />
            <div className="container">
              <h2>Rajwardhan Jadhav</h2>
              <p className="title">Junior Developer</p>
              <p>B.Tech (CSE)</p>
              <p>
                <button className="button">
                  <a
                    href="mailto:7rajwardhanjadhav200@gmail.com"
                    rel="noreferrer"
                  >
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              style={{ width: "40%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuLB8WMVX3qR3A70Ho96IrQ32FrhnYLhfDg&usqp=CAU"
              alt="Atharva"
            />
            <div className="container">
              <h2>Atharva Nidhonkar</h2>
              <p className="title">Junior Developer</p>
              <p>B.Tech (CSE)</p>
              <p>
                <button className="button">
                  <a
                    href="mailto:atharvanidhonkar10@gmail.com"
                    rel="noreferrer"
                  >
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
