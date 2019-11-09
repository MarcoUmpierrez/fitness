export interface Days {
  Monday: number,
  Tuesday: number,
  Wednesday: number,
  Thursday: number,
  Friday: number,
  Saturday: number,
  Sunday: number
}

export interface Weeks {
  Week1: number,
  Week2: number,
  Week3: number,
  Week4: number
}

export const days: Days = {
  Monday:    0b0000001,
  Tuesday:   0b0000010,
  Wednesday: 0b0000100,
  Thursday:  0b0001000,
  Friday:    0b0010000,
  Saturday:  0b0100000,
  Sunday:    0b1000000
}

export const weeks: Weeks = {
  Week1: 0b0001,
  Week2: 0b0010,
  Week3: 0b0100,
  Week4: 0b1000,
}

export const readFlag = (flags: number, index: number) : boolean => {
  return (flags & index) !== 0;
}

export const changeFlag = (flags: number, index: number) : number => {
  return flags ^ index;
}