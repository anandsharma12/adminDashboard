import React from "react";
import "../leftside/Leftside.css";
import { IoIosArrowDown } from "react-icons/io";
import profile from "../../img/profile.jpeg";
const Leftside = () => {
  return (
    <>
      <div className="Leftside">
        <div className="profile">
          {/* logo */}
          <div className="profilePic">
            <div className="leftLogo">
              <img src={profile} alt="" />
            </div>
            <div className="profileName">
              <p>Hi Mike,</p>
              <p>welcome back.</p>
            </div>
          </div>
          <div>
            <div className="profileInfo">
              <p>Today</p>
              <div className="Balance">
                <p>$19,892</p>
                <p>Account Balance</p>
              </div>
              <div className="Year-to-Date">
                <p>$4000</p>
                <p>Year-to-Date Contributions</p>
              </div>
              <div className="Totalinterest">
                <p>$4000</p>
                <p>Total Interest</p>
              </div>
              <div className="button w-100">
                <button type="button" class="btn btn-primary fs-6 w-98 ">
                  i want to{" "}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="profileTransaction">
            <p>Recent Transactions</p>
            <div className="transaction">
              <div>
                <p>2020-08-07</p>
                <p>Withdrawl Transfer to Bank-XXX11</p>
              </div>
              <hr />
              <div>
                <p>2020-07-21</p>
                <p>Withdrawl Transfer to Bank-XXX11</p>
              </div>
              <hr />
              <div>
                <p>2020-07-16</p>
                <p>Withdrawl Transfer to Bank-XXX11</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftside;
