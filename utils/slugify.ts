import { trim } from "./trim";

export const slugify = (string: string, removeSpecialCharacters = true) =>
  trim(removeSpecialCharacters ?
    string.toLowerCase().replace(/[^\u0100-\uFFFF\w\-]/g, "-").replace(/\-\-+/g, "-") :
    string.toLowerCase().replace(/[^\w ]+/g, "") .replace(/ +/g, "-"), "-");
