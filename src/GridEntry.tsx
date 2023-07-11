import * as React from 'react';

import './entry.css';

export default function GridEntry(entry: {
  name: string;
  room: string;
  teacher: string;
  description: string;
  slotStart: number;
  slotEnd: number;
}) {
  console.log(entry);

  return (
    <div
      className="entry"
      style={{
        gridRowStart: entry.slotStart,
        gridRowEnd: entry.slotEnd + 1,
        //'grid-row-start': ,
        //'grid-row-end':
      }}
    >
      <div className="title">
        {entry.name + entry.slotStart + entry.slotEnd}
      </div>
      <div>{entry.room}</div>
      <div>{entry.teacher}</div>
      <div className="description">{entry.description}</div>
    </div>
  );
}
