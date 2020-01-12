export default class Pangram {
  private _str: string = "";
  private _alphabet: Object = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  };

  constructor(str: string) {
    this._str = str;
  }

  isPangram() {
    if (!this.getStr()) {
      return false;
    } else {
      const splitted = this.getStr().replace(/\s/gm, "");
      for (const char of splitted) {
        const entries = Object.entries(this._alphabet);
        for (let i = 0; i < entries.length; i++) {
          let [key, value] = entries[i];

          if (char === key) {
          }
        }
      }

      // console.log(this._alphabet);
    }
  }

  getStr() {
    return this._str;
  }
}
