declare global {
    interface Window {
      env: typeof Environnement
    }
  }
  
  declare const window: Window &
     typeof globalThis & {
       env: any
  }