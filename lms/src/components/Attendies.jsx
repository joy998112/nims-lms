import { useEffect, useState } from "react";
import "./Attendies.css";
import Students from "./Students.json";

export default function Attendies() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate
      .toLocaleString("default", { month: "long" })
      .substring(0, 3)} , ${currentDate.getFullYear()}`;
    setToday(formattedDate);
  }, []);

  return (
    <div id="Attendence">
      <div id="high-attendence">
        <div id="high-first">
          <h2>Attendence</h2>
          <div id="attendence-date">
            <p>❮ &nbsp; &nbsp; </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar3"
              viewBox="0 0 16 16"
            >
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            &nbsp; {today}
            <p>&nbsp; &nbsp; ❯</p>
          </div>
        </div>
        <div id="high-second">
          <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option selected>Select Course</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option selected>Select Semester</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option selected>Select Subject</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group">
            <button id="Attendence-button">Take Attendence</button>
          </div>
        </div>
      </div>
      <div id="low-attendence">
        {Students.map((Student) => (
          <div key={Student.id} className="att-students">
            <div>
              <img src={Student.image} alt="" />
            </div>
            <div>{Student.name}</div>
            <div className="attendence-types">
              <p className="present">P</p>
              <p className="absent">A</p>
              <p className="leave">L</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
