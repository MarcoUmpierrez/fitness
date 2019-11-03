export const readFlag = (flags: number, index: number) : boolean => {
  return (flags & index) !== 0;
}

export const changeFlag = (flags: number, index: number) : number => {
  return flags ^ index;
}