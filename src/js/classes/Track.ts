import Note = require('./Note');

export class Track {
  id: Number;
  pitches: Note.Note[][] = new Array(24);
  notes: Note.Note[] = [];
  volume: Number = 100;
  gridClick() {
    console.log("trololo");
    return 0;
  }
}