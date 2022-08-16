import { useEffect } from "react";
import dynamic from "next/dynamic";
const Hydra = require("hydra-synth");
import useHydraSync from "../hooks/useHydraSync";

interface CanvasProps {
  detectAudio: boolean;
  canvasNo: number;
  makeGlobal: boolean;
  hydraFunc: string;
}

const Canvas = ({
  detectAudio,
  canvasNo,
  makeGlobal = false,
  hydraFunc,
}: CanvasProps) => {
  const hydraSync = useHydraSync(window);
  const createHydra = () => {
    // create a new canvas and append it to the feed
    const feed = document.getElementById("feed");
    const canvas = document.createElement("canvas");
    canvas.id = `canvas${canvasNo}`;
    feed?.appendChild(canvas);

    // instanciate a new hydra
    const hydra = new Hydra({
      detectAudio: detectAudio,
      canvas: document.getElementById(canvas.id),
      makeGlobal: makeGlobal,
      autoLoop: true,
    }).synth;
    hydraSync.register(hydra);
    eval("hydra" + hydraFunc);
  };

  createHydra();

  return <div className="canvas"></div>;
};

export default Canvas;
