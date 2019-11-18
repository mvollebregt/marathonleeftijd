import {Injectable} from '@angular/core';
import {UserParameters} from './user-parameters.service';
import {Result} from './result';
import {Gender} from './gender';
import {Distance} from './distance';
import {FinishTime} from './finish-time';

@Injectable({providedIn: 'root'})
export class CalculationService {

  calculateAge(parameters: UserParameters): Result {

    const list = this.getList(parameters.gender, parameters.distance);

    const yourseconds = this.seconds(parameters.finishTime);
    const slower = list.findIndex(item =>
      this.seconds(item.tijd) > yourseconds
    );
    if (slower === 0) {
      return {jouwleeftijd: 20, ...list[0]};
    }
    if (slower === -1) {
      return {jouwleeftijd: 100, ...list[list.length - 1]};
    }
    const slowerseconds = this.seconds(list[slower].tijd);
    const fasterseconds = this.seconds(list[slower - 1].tijd);
    const jouwleeftijd = (yourseconds - fasterseconds) / (slowerseconds - fasterseconds) *
      (list[slower].leeftijd - list[slower - 1].leeftijd) + list[slower - 1].leeftijd;
    return {jouwleeftijd, ...list[slower - 1]};
  }

  private getList(gender: Gender, distance: Distance) {
    switch (`${gender}, ${distance.name}`) {
      case 'male, marathon':
        return man42k;
      case 'male, halve marathon':
        return man21k;
      case 'male, 10 kilometer':
        return man10k;
      case 'male, 5 kilometer':
        return man5k;
      case 'female, marathon':
        return female42k;
      case 'female, halve marathon':
        return female21k;
      case 'female, 10 kilometer':
        return female10k;
      case 'female, 5 kilometer':
        return female5k;
    }
  }

  private seconds(time: FinishTime) {
    return time.hours * 60 * 60 + time.minutes * 60 + time.seconds;
  }
}


const man5k = [
  {loper: 'Bernard Lagat', jaar: 2016, leeftijd: 41, tijd: {hours: 0, minutes: 13, seconds: 38}},
  {loper: 'Kevin Castille', jaar: 2017, leeftijd: 45, tijd: {hours: 0, minutes: 14, seconds: 29}},
  {loper: 'Martin Rees', jaar: 2003, leeftijd: 50, tijd: {hours: 0, minutes: 15, seconds: 0}},
  {loper: 'Martin Rees', jaar: 2008, leeftijd: 55, tijd: {hours: 0, minutes: 15, seconds: 31}},
  {loper: 'Martin Rees', jaar: 2014, leeftijd: 61, tijd: {hours: 0, minutes: 16, seconds: 6}},
  {loper: 'Ed Whitlock', jaar: 1998, leeftijd: 67, tijd: {hours: 0, minutes: 17, seconds: 23}},
  {loper: 'Ed Whitlock', jaar: 2004, leeftijd: 73, tijd: {hours: 0, minutes: 18, seconds: 21}},
  {loper: 'Ed Whitlock', jaar: 2006, leeftijd: 75, tijd: {hours: 0, minutes: 18, seconds: 45}},
  {loper: 'Stephen Charlton', jaar: 2007, leeftijd: 80, tijd: {hours: 0, minutes: 22, seconds: 41}},
  {loper: 'Stephen Charlton', jaar: 2012, leeftijd: 85, tijd: {hours: 0, minutes: 24, seconds: 57}},
  {loper: 'Henry Sypniewski', jaar: 2008, leeftijd: 90, tijd: {hours: 0, minutes: 33, seconds: 46}},
  {loper: 'Roy Englert', jaar: 2017, leeftijd: 95, tijd: {hours: 0, minutes: 40, seconds: 52}}];

const man10k = [
  {loper: 'Bernard Lagat', jaar: 2015, leeftijd: 40, tijd: {hours: 0, minutes: 27, seconds: 47}},
  {loper: 'Driss Lakhouaja', jaar: 2018, leeftijd: 45, tijd: {hours: 0, minutes: 29, seconds: 37}},
  {loper: 'Tecwyn Davies', jaar: 1988, leeftijd: 50, tijd: {hours: 0, minutes: 30, seconds: 35}},
  {loper: 'Martin Fiz', jaar: 2019, leeftijd: 55, tijd: {hours: 0, minutes: 31, seconds: 40}},
  {loper: 'Martin Rees', jaar: 2013, leeftijd: 60, tijd: {hours: 0, minutes: 32, seconds: 48}},
  {loper: 'Albert Anderegg', jaar: 2012, leeftijd: 66, tijd: {hours: 0, minutes: 35, seconds: 35}},
  {loper: 'Ed Whitlock', jaar: 2004, leeftijd: 73, tijd: {hours: 0, minutes: 37, seconds: 33}},
  {loper: 'Ed Whitlock', jaar: 2006, leeftijd: 75, tijd: {hours: 0, minutes: 40, seconds: 10}},
  {loper: 'Ed Whitlock', jaar: 2011, leeftijd: 80, tijd: {hours: 0, minutes: 42, seconds: 58}},
  {loper: 'Luciano Acquarone', jaar: 2015, leeftijd: 85, tijd: {hours: 0, minutes: 52, seconds: 53}},
  {loper: 'Julian Bernal Medina', jaar: 2009, leeftijd: 90, tijd: {hours: 1, minutes: 11, seconds: 54}},
];

const man21k = [
  {loper: 'Haile Gebreselasie', jaar: 2013, leeftijd: 40, tijd: {hours: 1, minutes: 1, seconds: 9}},
  {loper: 'Jackson Kipngok Yegon', jaar: 2006, leeftijd: 45, tijd: {hours: 1, minutes: 5, seconds: 1}},
  {loper: 'Titus Mamabolo', jaar: 1991, leeftijd: 50, tijd: {hours: 1, minutes: 6, seconds: 23}},
  {loper: 'Norman Green', jaar: 1987, leeftijd: 55, tijd: {hours: 1, minutes: 10, seconds: 23}},
  {loper: 'Martin Rees', jaar: 2013, leeftijd: 60, tijd: {hours: 1, minutes: 11, seconds: 31}},
  {loper: 'Wil vanderLee', jaar: 1997, leeftijd: 67, tijd: {hours: 1, minutes: 16, seconds: 25}},
  {loper: 'Ed Whitlock', jaar: 2001, leeftijd: 70, tijd: {hours: 1, minutes: 22, seconds: 23}},
  {loper: 'Ed Whitlock', jaar: 2007, leeftijd: 76, tijd: {hours: 1, minutes: 29, seconds: 26}},
  {loper: 'Ed Whitlock', jaar: 2012, leeftijd: 81, tijd: {hours: 1, minutes: 38, seconds: 59}},
  {loper: 'Ed Whitlock', jaar: 2016, leeftijd: 85, tijd: {hours: 1, minutes: 50, seconds: 47}},
  {loper: 'Mike Fremont', jaar: 2012, leeftijd: 90, tijd: {hours: 2, minutes: 56, seconds: 26}},
];

const man42k = [
  {loper: 'Kenneth Mburu Mungara', jaar: 2016, leeftijd: 42, tijd: {hours: 2, minutes: 8, seconds: 38}},
  {loper: 'Jackson Kipngok Yegon', jaar: 2006, leeftijd: 45, tijd: {hours: 2, minutes: 14, seconds: 16}},
  {loper: 'Titus Mamabolo', jaar: 1991, leeftijd: 50, tijd: {hours: 2, minutes: 19, seconds: 29}},
  {loper: 'Piet vanAlphen', jaar: 1986, leeftijd: 55, tijd: {hours: 2, minutes: 25, seconds: 26}},
  {loper: 'Yoshihisa Hosaka', jaar: 2009, leeftijd: 60, tijd: {hours: 2, minutes: 36, seconds: 30}},
  {loper: 'Derek Turnbull', jaar: 1992, leeftijd: 65, tijd: {hours: 2, minutes: 41, seconds: 57}},
  {loper: 'Gene Dykes', jaar: 2018, leeftijd: 70, tijd: {hours: 2, minutes: 54, seconds: 23}},
  {loper: 'Ed Whitlock', jaar: 2007, leeftijd: 76, tijd: {hours: 3, minutes: 4, seconds: 53}},
  {loper: 'Ed Whitlock', jaar: 2011, leeftijd: 80, tijd: {hours: 3, minutes: 15, seconds: 53}},
  {loper: 'Ed Whitlock', jaar: 2016, leeftijd: 85, tijd: {hours: 3, minutes: 56, seconds: 38}},
  {loper: 'Mike Fremont', jaar: 201, leeftijd: 9, tijd: {hours: 6, minutes: 35, seconds: 47}}
];

const female5k = [
  {loper: 'Colleen De Reuck', jaar: 2004, leeftijd: 40, tijd: {hours: 0, minutes: 15, seconds: 47}},
  {loper: 'Linda Somers', jaar: 2009, leeftijd: 48, tijd: {hours: 0, minutes: 16, seconds: 13}},
  {loper: 'Tatyana Pozdniakova', jaar: 2005, leeftijd: 50, tijd: {hours: 0, minutes: 16, seconds: 38}},
  {loper: 'Fiona Matheson', jaar: 2017, leeftijd: 56, tijd: {hours: 0, minutes: 17, seconds: 41}},
  {loper: 'Kathryn Martin', jaar: 2011, leeftijd: 60, tijd: {hours: 0, minutes: 19, seconds: 4}},
  {loper: 'Sabra Harvey', jaar: 2017, leeftijd: 68, tijd: {hours: 0, minutes: 19, seconds: 50}},
  {loper: 'Jan Holmquist', jaar: 2015, leeftijd: 71, tijd: {hours: 0, minutes: 22, seconds: 14}},
  {loper: 'Libby James', jaar: 2012, leeftijd: 75, tijd: {hours: 0, minutes: 23, seconds: 34}},
  {loper: 'Libby James', jaar: 2016, leeftijd: 80, tijd: {hours: 0, minutes: 25, seconds: 14}},
  {loper: 'Lenore Montgomery', jaar: 2017, leeftijd: 86, tijd: {hours: 0, minutes: 34, seconds: 23}},
  {loper: 'Evelyn Tripp', jaar: 2009, leeftijd: 93, tijd: {hours: 0, minutes: 46, seconds: 24}},
  {loper: 'Betty Ashley', jaar: 2017, leeftijd: 95, tijd: {hours: 1, minutes: 28, seconds: 36}}
];

const female10k = [
  {loper: 'Christelle Daunay', jaar: 2005, leeftijd: 41, tijd: {hours: 0, minutes: 32, seconds: 23}},
  {loper: 'Tatyana Pozdniakova', jaar: 2002, leeftijd: 45, tijd: {hours: 0, minutes: 33, seconds: 28}},
  {loper: 'Linda Somers', jaar: 2011, leeftijd: 50, tijd: {hours: 0, minutes: 34, seconds: 14}},
  {loper: 'Fiona Matheson', jaar: 2016, leeftijd: 55, tijd: {hours: 0, minutes: 36, seconds: 16}},
  {loper: 'Lidia Zentner', jaar: 2015, leeftijd: 62, tijd: {hours: 0, minutes: 38, seconds: 56}},
  {loper: 'Angela Copson', jaar: 2015, leeftijd: 68, tijd: {hours: 0, minutes: 40, seconds: 30}},
  {loper: 'Lavinia Petrie', jaar: 2014, leeftijd: 71, tijd: {hours: 0, minutes: 44, seconds: 9}},
  {loper: 'Louise Gilchrist', jaar: 2008, leeftijd: 75, tijd: {hours: 0, minutes: 49, seconds: 31}},
  {loper: 'Deidre Larkin', jaar: 2013, leeftijd: 81, tijd: {hours: 0, minutes: 54, seconds: 17}},
  {loper: 'Deidre Larkin', jaar: 2017, leeftijd: 85, tijd: {hours: 0, minutes: 59, seconds: 51}}
];

const female21k = [
  {loper: 'Sinead Diver', jaar: 2019, leeftijd: 41, tijd: {hours: 1, minutes: 8, seconds: 55}},
  {loper: 'Evy Palm', jaar: 1988, leeftijd: 46, tijd: {hours: 1, minutes: 11, seconds: 18}},
  {loper: 'Linda Somers', jaar: 2011, leeftijd: 50, tijd: {hours: 1, minutes: 15, seconds: 18}},
  {loper: 'de:Silke Schmidt', jaar: 2015, leeftijd: 55, tijd: {hours: 1, minutes: 19, seconds: 38}},
  {loper: 'Bernardine Portenski', jaar: 2010, leeftijd: 60, tijd: {hours: 1, minutes: 24, seconds: 56}},
  {loper: 'Emmi Luthi', jaar: 2009, leeftijd: 65, tijd: {hours: 1, minutes: 32, seconds: 56}},
  {loper: 'Lavinia Petrie', jaar: 2014, leeftijd: 70, tijd: {hours: 1, minutes: 37, seconds: 38}},
  {loper: 'Libby James', jaar: 2013, leeftijd: 76, tijd: {hours: 1, minutes: 46, seconds: 8}},
  {loper: 'Betty Jean McHugh', jaar: 2008, leeftijd: 80, tijd: {hours: 2, minutes: 4, seconds: 19}},
  {loper: 'Deidre Larkin', jaar: 2017, leeftijd: 85, tijd: {hours: 2, minutes: 12, seconds: 37}},
  {loper: 'Gladys Burrill', jaar: 2012, leeftijd: 93, tijd: {hours: 4, minutes: 49, seconds: 25}}
];

const female42k = [
  {loper: 'Mariya Konovalova', jaar: 2015, leeftijd: 40, tijd: {hours: 2, minutes: 22, seconds: 27}},
  {loper: 'Catherine Bertone', jaar: 2017, leeftijd: 45, tijd: {hours: 2, minutes: 28, seconds: 34}},
  {loper: 'Tatyana Pozdniakova', jaar: 2005, leeftijd: 50, tijd: {hours: 2, minutes: 31, seconds: 5}},
  {loper: 'Rae Baymiller', jaar: 1998, leeftijd: 55, tijd: {hours: 2, minutes: 52, seconds: 14}},
  {loper: 'Bernardine Portenski', jaar: 2010, leeftijd: 60, tijd: {hours: 3, minutes: 1, seconds: 30}},
  {loper: 'Emmi Luthi', jaar: 2009, leeftijd: 65, tijd: {hours: 3, minutes: 12, seconds: 56}},
  {loper: 'Jeannie Rice', jaar: 2018, leeftijd: 70, tijd: {hours: 3, minutes: 27, seconds: 50}},
  {loper: 'Yoko Nakano', jaar: 2012, leeftijd: 76, tijd: {hours: 3, minutes: 53, seconds: 42}},
  {loper: 'Yoko Nakano', jaar: 2017, leeftijd: 81, tijd: {hours: 4, minutes: 11, seconds: 45}},
  {loper: 'Betty Jean McHugh', jaar: 2012, leeftijd: 85, tijd: {hours: 5, minutes: 14, seconds: 26}},
  {loper: 'Betty Jean McHugh', jaar: 2017, leeftijd: 90, tijd: {hours: 7, minutes: 3, seconds: 59}}
];
