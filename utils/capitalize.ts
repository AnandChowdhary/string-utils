export const capitalize = (string: string, lowercase = false) =>
  lowercase ?
    string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase() :
    string.charAt(0).toUpperCase() + string.slice(1);
