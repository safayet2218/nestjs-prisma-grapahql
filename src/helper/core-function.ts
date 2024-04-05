export function lcfirst(str) {
    str += '';
    const f = str.charAt(0).toLowerCase();
    return f + str.substr(1);
  }