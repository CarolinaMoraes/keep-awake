// stayAwakeModule.d.ts

declare const stayAwakeModule: {
  webm: string;
  mp4: string;
  addSourceToVideo: (
    element: HTMLElement,
    type: string,
    dataURI: string
  ) => void;
  init: () => void;
  enable: () => void;
  disable: () => void;
};

export default stayAwakeModule;
