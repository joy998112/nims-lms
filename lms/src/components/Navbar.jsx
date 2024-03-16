import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav
        id="NavbarMain"
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <a className="navbar-brand w-50" href="/">
          <img src="nims.jpg" alt="logo" id="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul
          className="navbar-nav collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <li id="Profiletext" className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profile
            </a>
            <div
              id="DropdownMenu"
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <p className="dropdown-item" href="/">
                Student Name
              </p>
              <p className="dropdown-item" href="/">
                Enrollment ID
              </p>
              <p className="dropdown-item" href="/">
                Course
              </p>
            </div>
          </li>
          <li className="nav-item active ">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              Academics
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              Attendence
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              Exam
            </a>
          </li>
          <li id="drive" className="nav-item ">
            <a className="nav-link" href="/">
              Drive
            </a>
          </li>

          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Others
            </a>
            <div
              id="DropdownMenu"
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/">
                Fee Payment
              </a>
              <a className="dropdown-item" href="/">
                Fee Ledger
              </a>
            </div>
          </li>
          <li id="settings" className="nav-item ">
            <a className="nav-link" href="/">
              Setting
            </a>
          </li>
          <li id="support" className="nav-item ">
            <a className="nav-link" href="/">
              Support
            </a>
          </li>
          <li id="logout" className="nav-item ">
            <a className="nav-link" href="/">
              Logout
            </a>
          </li>
          <li id="profile-dropdown" className="nav-item dropdown">
            <div>
              <div
                style={{ color: "white" }}
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                  height="50px"
                  src="profile.png"
                  alt="profile"
                />
              </div>
              <ul
                style={{ cursor: "pointer" }}
                className="dropdown-menu dropdown-menu-right"
              >
                <div
                  className="dropstart"
                  id="s-details-container"
                >
                  <li className="dropdown-toggle">Profile</li>
                  <ul id="s-details">
                    <li>Student Name</li>
                    <li>Enrollment ID</li>
                    <li>Course</li>
                  </ul>
                </div>
                <li className="dropdown-item">Settings</li>
                <li className="dropdown-item">Support</li>
                <li className="dropdown-item">Drive</li>
                <li className="dropdown-item">Logout</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
