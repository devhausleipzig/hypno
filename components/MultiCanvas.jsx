const Hydra = require("hydra-synth");

const MultiCanvas = () => {
  // create canvases
  const canvas0 = document.createElement("canvas");
  const canvas1 = document.createElement("canvas");
  const canvas2 = document.createElement("canvas");
  const canvas3 = document.createElement("canvas");
  const canvas4 = document.createElement("canvas");

  // size the canvases
  const width = window.innerWidth / 2;
  const height = (width * 9) / 16;

  // function to initialize hydra
  // feel free to edit the size or move them into arguments
  const initHydra = ({ makeGlobal, canvas, width, height }) => {
    canvas.width = width;
    canvas.height = height;
    const hydra = new Hydra({
      canvas: canvas,
      detectAudio: false,
      enableStreamCapture: false,
      makeGlobal,
      autoLoop: false, // important!!
    });
    document.getElementById("feed").appendChild(canvas);
    return hydra;
  };

  // instantiate multiple hydras
  const hydra0 = initHydra({
    canvas: canvas0,
    makeGlobal: false,
    width: width,
    height: height,
  });
  const hydra1 = initHydra({
    canvas: canvas1,
    makeGlobal: false,
    width: width,
    height: height,
  });
  const hydra2 = initHydra({
    canvas: canvas2,
    makeGlobal: false,
    width: width,
    height: height,
  });
  const hydra3 = initHydra({
    canvas: canvas3,
    makeGlobal: false,
    width: width,
    height: height,
  });
  const hydra4 = initHydra({
    canvas: canvas4,
    makeGlobal: false,
    width: width,
    height: height,
  });

  // synchronize hydra updates
  // if you go for autoLoop: true, hydra instances will be out of sync
  let start, previousTimeStamp;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
      previousTimeStamp = timestamp;
    }
    const dt = timestamp - previousTimeStamp;

    hydra0.tick(dt);
    hydra1.tick(dt);
    hydra2.tick(dt);
    hydra3.tick(dt);
    hydra4.tick(dt);

    previousTimeStamp = timestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);

  const synth0 = hydra0.synth;
  synth0.osc(10, 0.1).color(1, 0, 0).out();
  const synth1 = hydra1.synth;
  synth1.osc(16, 0.1).color(0, 0, 1).out();
  const synth2 = hydra2.synth;
  synth2.osc(20, 0.2).color(0, 1, 0).out();
  const synth3 = hydra3.synth;
  synth3.osc(7, 0.8).color(1, 0, 1).out();
  const synth4 = hydra4.synth;
  synth4.osc(9, 0.2).color(0, 0.5, 1).out();

  return null;
};

export default MultiCanvas;
