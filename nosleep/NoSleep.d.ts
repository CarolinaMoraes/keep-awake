import NoSleep from "NoSleep.js";
declare module "NoSleep.js" {
  class NoSleep {
    constructor(): NoSleep;
    enable(): void;
    disable(): void;
  }
  exports.NoSleep = NoSleep;
}
