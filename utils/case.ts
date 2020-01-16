export const capitalize = (string: string, lowercase = false) =>
  lowercase ?
    string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase() :
    string.charAt(0).toUpperCase() + string.slice(1);

/**
 * 
 * @param str 
 * @source - https://stackoverflow.com/a/2970667/1656944
 */
export const camelCase = (str: string) =>
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
    index == 0 ? word.toLowerCase() : word.toUpperCase()
  ).replace(/\s+/g, "");


/**
 * 
 * @param string 
 * @source - https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149#gistcomment-2183914
 */
export const kebabCase = (string: string) =>
  string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();

export const snakeCase = (string: string) =>
  kebabCase(string).replace(/-/g, "_");
