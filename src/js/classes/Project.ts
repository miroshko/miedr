import Track = require('./Track');

export class Project {
  name: string;
  tempo: number;
  tracks: Track.Track[] = [];

  constructor(parameters) {
    this.tracks.push(new Track.Track);
  }
}