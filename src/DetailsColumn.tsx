import * as React from "react";
import { Event } from "./Events";

function DetailColumnEntry(props: { event: Event }) {
  return (
    <div className="detail-entry">
      <p>{props.event.semester}. Semester / 08:15 – 13:15</p>
      <p>
        {props.event.name}
        <br />• {props.event.room}
        <br />• {props.event.teacher}
        <br />
        {props.event.description}
      </p>
    </div>
  );
}

export default function DetailsColumn(column: { events: Event[] }) {
  let entries = [];

  column.events.forEach((event) => {
    entries.push(<DetailColumnEntry event={event} />);
  });

  return (
    <div className="detail-events">
      {entries}
      <div className="transparency"></div>
    </div>
  );
}
