import * as React from 'react';
import './style.css';

import Entry from './Entry';
import GridEntry from './GridEntry';

export default function App() {
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
            <div className="semester-events">
              <Entry
                name="Media Technology Basics"
                room="F3-0-20"
                teacher="TS, StS"
                description="Gruppe 1; bitte Aufteilung und Dokumente in StudIP beachten"
                duration={6}
              />
            </div>
          </div>
          <div className="column-semester">
            <div className="title">2. Semester</div>
            <div className="semester-events semester-events-grid">
              <GridEntry
                name="Media Technology Basics"
                room="F3-0-20"
                teacher="TS, StS"
                description="Gruppe 1; bitte Aufteilung und Dokumente in StudIP beachten"
                slotStart={1}
                slotEnd={6}
              />
              <GridEntry
                name="Media Technology Basics"
                room="F3-0-20"
                teacher="TS, StS"
                description="Gruppe 1; bitte Aufteilung und Dokumente in StudIP beachten"
                slotStart={7}
                slotEnd={10}
              />
            </div>
          </div>
          <div className="column-semester">
            <div className="title">3. Semester</div>
            <div className="semester-events"></div>
          </div>
        </div>
        <div className="schedule-column column-details">
          <div className="detail-entry">
            <p>1. Semester / 08:15 – 13:15</p>
            <p>
              Media Technology Basics
              <br />
              • F3-0-20
              <br />
              • TS, StS
              <br />
              Gruppe 1; bitte Aufteilung und Dokumente in StudIP beachten ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
