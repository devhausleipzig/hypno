const Hydra = require("hydra-synth");
import useHydraSync from "../hooks/useHydraSync";

interface CanvasProps {
  detectAudio: boolean;
  canvasNo: number;
  hydraFunc: string;
  width: number;
  height: number;
}

const Canvas = ({
  detectAudio,
  canvasNo,
  hydraFunc,
  width,
  height,
}: CanvasProps) => {
  const hydraSync = useHydraSync(window);
  const createHydra = () => {
    // create a new canvas and append it to the feed
    const feed = document.getElementById("feed");
    const canvas = document.createElement("canvas");
    canvas.id = `canvas-${canvasNo}`;
    canvas.width = width;
    canvas.height = height;
    feed?.appendChild(canvas);

    // instanciate a new hydra
    const hydra = new Hydra({
      detectAudio: detectAudio,
      canvas: document.getElementById(canvas.id),
      makeGlobal: false,
      autoLoop: false,
    }).synth;
    hydraSync.register(hydra);
    eval("hydra" + hydraFunc);
  };

  createHydra();

  return null;
};

export default Canvas;
