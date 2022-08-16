import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MultiCanvasNonSSR = dynamic(() => import("../components/MultiCanvas"), {
    ssr: false,
  });

  const MultiCanvas = dynamic(() => import("../components/Canvas2"), {
    ssr: false,
  });

  const templates = [".osc(10, 0.1, 0.5).out()", ".osc(20, 0.1, 1).out()"];

  return (
    <div className="flex h-full w-screen">
      <div
        id="feed"
        className="mx-auto flex flex-col p-4 w-1/2 shrink-0 bg-slate-800 text-white space-y-4"
      >
        <p className="text-2xl pl-2">Multiple Instances of Hydra</p>
        {/* <MultiCanvasNonSSR /> */}
        <MultiCanvas
          detectAudio={false}
          canvasNo={0}
          makeGlobal={false}
          hydraFunc={".osc(10, 0.1, 0.5).out()"}
        />
        <MultiCanvas
          detectAudio={false}
          canvasNo={1}
          makeGlobal={false}
          hydraFunc={".osc(20, 0.1, 1).out()"}
        />
      </div>
    </div>
  );
};

export default Home;
