/* eslint-disable @typescript-eslint/no-explicit-any */
export const deviceInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  vendor: navigator.vendor,
  deviceMemory: (navigator as any).deviceMemory, // may be undefined
  hardwareConcurrency: navigator.hardwareConcurrency,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  pixelRatio: window.devicePixelRatio,
  prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

//derive device info and store in localStorage

export class StoreSys {
  constructor() {
    console.log("initialed")
  }
}

