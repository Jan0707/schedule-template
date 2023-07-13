import * as React from "react";
import "./style.css";

import Events from "./Events";
import SemesterColumn from "./SemesterColumn";
import DetailsColumn from "./DetailsColumn";

export default function App() {
  let events = Events;

  let semesters = [];

  events.forEach((event) => {
    if (!semesters[event.semester]) {
      semesters[event.semester] = [];
    }
    semesters[event.semester].push(event);
  });

  console.log(semesters);

  if (!semesters[1]) {
    semesters[1] = [];
  }

  if (!semesters[2]) {
    semesters[2] = [];
  }

  if (!semesters[3]) {
    semesters[3] = [];
  }

  return (
    <div className="container">
      <div className="schedule-header">
        <div>
          <h1>Media: Conception & Production</h1>
        </div>
        <div>
          <h2>Montag, 26. Juni 2023</h2>
        </div>
      </div>
      <div className="schedule-container">
        <div className="schedule-column column-timing">
          <div>KW 99</div>
          <div className="timings">
            <div>08:15 - 09:00</div>
            <div>09:00 - 09:45</div>
            <div>10:00 - 10:45</div>
            <div>10:45 - 11:30</div>
            <div>11:45 - 12:30</div>
            <div>12:30 - 13:15</div>
            <div>13:15 - 14:15</div>
            <div>14:15 - 15:00</div>
            <div>15:00 - 15:45</div>
            <div>16:00 - 16:45</div>
            <div>16:45 - 17:30</div>
            <div>17:45 - 18:30</div>
            <div>18:30 - 19:15</div>
          </div>
        </div>
        <div className="schedule-columns columns-semesters">
          <div className="column-semester">
            <div className="title">1. Semester</div>
            <SemesterColumn events={semesters[1]} />
          </div>
          <div className="column-semester">
            <div className="title">2. Semester</div>
            <SemesterColumn events={semesters[2]} />
          </div>
          <div className="column-semester">
            <div className="title">3. Semester</div>
            <SemesterColumn events={semesters[3]} />
          </div>
        </div>
        <div className="schedule-column column-details">
          <DetailsColumn events={events} />
        </div>
      </div>
    </div>
  );
}
