export const addDotsToValue = (value: number) => value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
