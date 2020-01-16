import { trim } from "./trim";

export const slugify = (string: string, slugSpecialCharacters = true) =>
  trim(slugSpecialCharacters ?
    string.toLowerCase().replace(/[^\u0100-\uFFFF\w\-]/g, "-").replace(/\-\-+/g, "-") :
    string.toLowerCase().replace(/[^\w ]+/g, "") .replace(/ +/g, "-"), "-");
