class HydraSync {
  static window: Window;
  static singleton: HydraSync | boolean = false;

  startTimestamp: any;
  prevTimestamp: any;
  hydraInstances: any[];

  static init(window: Window) {
    HydraSync.window = window;
  }

  constructor() {
    if (!HydraSync.window) {
      throw new Error(
        "HydraSync must be configured before creating an instance"
      );
    }
    if (!HydraSync.singleton) {
      HydraSync.singleton = true;
      HydraSync.singleton = new HydraSync();
      const timeStep = HydraSync.singleton.step.bind(HydraSync.singleton);
      HydraSync.window.requestAnimationFrame(timeStep);
    }
    this.hydraInstances = [];
    return HydraSync.singleton as HydraSync;
  }
  step(timestamp: any) {
    if (this.startTimestamp === undefined) {
      this.startTimestamp = timestamp;
      this.prevTimestamp = timestamp;
    }
    const dt = timestamp - this.prevTimestamp;

    this.hydraInstances.forEach((instance) => {
      instance.tick(dt);
    });

    this.prevTimestamp = timestamp;
    HydraSync.window.requestAnimationFrame(this.step.bind(this));
  }
  register(hydraInstance: any) {
    this.hydraInstances.push(hydraInstance);
  }
}

const useHydraSync = (window?: Window) => {
  if (window) {
    HydraSync.window = window;
  }
  return new HydraSync();
};

export default useHydraSync;
