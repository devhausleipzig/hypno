import { useEffect } from "react";
import dynamic from "next/dynamic";
const Hydra = require("hydra-synth");

const Canvas = () => {
  const createHydra = () => {
    const hydra = new Hydra({
      detectAudio: false,
      canvas: document.getElementById("can"),
      makeGlobal: false,
    }).synth;
    hydra
      // .gradient(0.1)
      // .colorama(1)
      // .color(0, () => Math.sin(hydra.time), 0.45)
      // .colorama(0.01)
      // .colorama(0.01)
      // .colorama(0.01)
      // .colorama(0.01)
      // .mult(hydra.shape(4, () => Math.sin(hydra.time / 2)).repeat(1, 10))
      // .out();
      .osc(10, 0.1, 0.5)
      .out();
  };

  createHydra();

  return <div className="canvas"></div>;
};

export default Canvas;
