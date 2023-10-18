import React from "react";
import { NavBar } from "./NavBar";
export const PortfolioPage = () => {
  return (
   
      <div className="hero">
        <div className="content">
          <h2
            style={{ color: "violet", fontFamily: "serif", fontSize: "30px" }}
          >
            My Skills
          </h2>
          <div className="container-box">
            <div>
              <h3>Front-End</h3>
              <p>
                Worked on web based projects such as
               Tic-Tac-Toe game,To-do list,portfolio.
              </p>
            </div>
            <div>
              <h3>Back-End</h3>
              <p>
                Worked on projects such as Replication of data in cloud for
                optimal performance and security in java.
              </p>
            </div>
          </div>
        </div>
      </div>
   
  );
};
