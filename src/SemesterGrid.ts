export default class SemesterGrid {
  grid: number[][];

  constructor() {
    this.grid = [[]];
  }

  placeEvent(event: { slotStart: number; slotEnd: number; column: number }) {
    event.column = this.getColumnForSlots(event.slotStart, event.slotEnd);
  }

  getColumnForSlots(slotStart: number, slotEnd: number): number {
    let currentColumn = 1;
    let columnFound = false;

    do {
      if (!this.grid[currentColumn]) {
        this.grid[currentColumn] = Array(13).fill(0);
      }

      let target = this.grid[currentColumn].slice(slotStart - 1, slotEnd);
      let occupied = target.some((entry) => entry === 1);

      if (!occupied) {
        columnFound = true;
        this.grid[currentColumn].fill(1, slotStart - 1, slotEnd - 1);
      } else {
        currentColumn++;
      }
    } while (columnFound === false);

    return currentColumn;
  }
}
