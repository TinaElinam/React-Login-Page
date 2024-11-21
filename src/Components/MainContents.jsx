import { KeyRound, User } from "lucide-react";
import React from "react";

const MainContents = () => {
  return (
    <>
      <div className="SignIn-Wrapper">
        <h1 className="title">WELCOME</h1>
        <p className="subtitle">Enter your username and password</p>
        <div className="Container-Wrapper">
          <div className="SignIn-Container">
            <form>
              <div className="input-with-icon">
                <User size={20} color="white" className="input-icon" />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input"
                />
              </div>

              <div className="input-with-icon">
                <KeyRound size={20} color="white" className="input-icon" />
                <input type="text" placeholder="Password" className="input" />
              </div>

              <button className="btn">Login</button>
            </form>
          </div>
          <div className="Image-Container">
            <img src="../src/assets/lock6.jpg" alt="lock" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContents;
