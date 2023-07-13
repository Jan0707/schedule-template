import * as React from "react";

import "./entry.css";

export default function GridEntry(entry: {
  name: string;
  room: string;
  teacher: string;
  description: string;
  slotStart: number;
  slotEnd: number;
}) {
  return (
    <div
      className="entry"
      style={{
        gridRowStart: entry.slotStart,
        gridRowEnd: entry.slotEnd + 1,
      }}
    >
      <div className="title">{entry.name}</div>
      <div>{entry.room}</div>
      <div>{entry.teacher}</div>
      <div className="description">{entry.description}</div>
    </div>
  );
}
