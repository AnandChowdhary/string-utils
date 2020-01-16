/**
 * Trims a string with a specified character (removes character surrounding string)
 * @param string - String to trim
 * @param mask - Character to trim with
 * @source - https://stackoverflow.com/a/36391166/1656944
 */
export const trim = (string: string, mask: string) => {
  while (~mask.indexOf(string[0]))
    string = string.slice(1);
  while (~mask.indexOf(string[string.length - 1]))
    string = string.slice(0, -1);
  return string;
}
