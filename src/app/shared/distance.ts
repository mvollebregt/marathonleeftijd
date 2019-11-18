export interface Distance {
  fullName: string;
  name: string;
}

// tslint:disable-next-line:no-namespace
export const distances: Distance[] = [
  {fullName: 'marathonleeftijd', name: 'marathon'},
  {fullName: 'halvemarathonleeftijd', name: 'halve marathon'},
  {fullName: '10-kilometerleeftijd', name: '10 kilometer'},
  {fullName: '5-kilometerleeftijd', name: '5 kilometer'},
];

