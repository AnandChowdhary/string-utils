import { trim } from "./trim";

/**
 * Convert a string to slug (for URLs)
 * @param string - String to slugify
 * @param slugSpecialCharacters - Whether to change special characters to hyphen
 */
export const slugify = (string: string, slugSpecialCharacters = true) =>
  trim(slugSpecialCharacters ?
    string.toLowerCase().replace(/[^\u0100-\uFFFF\w\-]/g, "-").replace(/\-\-+/g, "-") :
    string.toLowerCase().replace(/[^\w ]+/g, "") .replace(/ +/g, "-"), "-");
