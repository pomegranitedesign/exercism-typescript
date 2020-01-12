import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

export default class SpaceAge {
  private _seconds: number = 0;

  constructor(seconds: number) {
    this._seconds = seconds;
  }

  get seconds(): number {
    return this._seconds;
  }

  // Calculate what someone's age will be on Earth
  // given this._seconds
  onEarth() {
    return this.toNum(this.toFixed2(this._seconds / 31557600));
  }

  // Calculate the age on Mercury
  onMercury() {
    const seconds = this.getEarthSeconds(0.2408467);
    return this.toNum(this.toFixed2(this._seconds / seconds));
  }

  // Calculate the age on Venus
  onVenus() {
    const seconds = this.getEarthSeconds(0.61519726);
    return this.toNum(this.toFixed2(this._seconds / seconds));
  }

  // Calculate the age on Mars
  onMars() {
    const seconds = this.getEarthSeconds(1.8808158);
    return this.toNum(this.toFixed2(this._seconds / seconds));
  }

  // Calculate the age on Jupiter
  onJupiter() {
    return 0;
  }

  // Calculate the age on Saturn
  onSaturn() {
    return 0;
  }

  // Calculate the age on Uranus
  onUranus() {
    return 0;
  }

  // Calculate the age on Neptune
  onNeptune() {
    return 0;
  }

  // Helpers
  toNum(str: string) {
    return +str;
  }

  toFixed2(num: number) {
    return num.toFixed(2);
  }

  getEarthSeconds(seconds: number) {
    return seconds * 365 * 24 * 60 * 60;
  }
}
