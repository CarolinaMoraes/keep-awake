declare const webm: string;
declare const mp4: string;

declare function oldIOS(): boolean;
declare function nativeWakeLock(): boolean;

declare class NoSleep {
  enabled: boolean;
  _wakeLock: any;
  noSleepTimer: any;
  noSleepVideo: HTMLVideoElement;

  constructor();

  enable(): void;
  disable(): void;

  private _addSourceToVideo(
    video: HTMLVideoElement,
    type: string,
    data: string
  ): void;
}

export default NoSleep;
