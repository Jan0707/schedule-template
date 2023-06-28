import * as React from 'react';

import './entry.css';

export default function Entry(entry: {
  name: string;
  room: string;
  teacher: string;
  description: string;
  duration: number;
}) {
  const height = `calc((1.2rem + 10px) * ${entry.duration} + 10px * ${
    entry.duration - 1
  })`;

  return (
    <div className="entry" style={{ height: height }}>
      <div className="title">{entry.name}</div>
      <div>{entry.room}</div>
      <div>{entry.teacher}</div>
      <div className="description">{entry.description}</div>
    </div>
  );
}
