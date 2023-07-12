import * as React from 'react';

import GridEntry from './GridEntry';
import SemesterGrid from './SemesterGrid';

export default function SemesterColumn(column: { events: [] }) {
  console.log(column.events);

  /*let semesterGrid = new SemesterGrid();
  console.log(semesterGrid);
  semesterGrid.placeEvent(column.events[0]);
  console.log(semesterGrid);
  semesterGrid.placeEvent(column.events[1]);
  console.log(semesterGrid);
*/
  console.log(column.events);

  let entries = [];

  column.events.forEach((event) => {
    entries.push(
      <GridEntry
        name={event.name}
        room={event.room}
        teacher={event.teacher}
        description={event.description}
        slotStart={event.slotStart}
        slotEnd={event.slotEnd}
      />
    );
  });

  return <div className="semester-events semester-events-grid">{entries}</div>;
}
