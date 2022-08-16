import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const templates = [
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
  ".osc(10, 0.1, 0.5).out()",
  ".osc(20, 0.1, 1).out()",
];

const Home: NextPage = () => {
  const CanvasNonSSR = dynamic(() => import("../components/Canvas"), {
    ssr: false,
  });

  return (
    <div className="flex h-full w-screen">
      <div
        id="feed"
        className="mx-auto flex flex-col p-4 w-1/2 shrink-0 bg-slate-800 text-white space-y-4"
      >
        <p className="text-2xl pl-2">Multiple Instances of Hydra</p>
        {templates.map((template, i) => {
          return (
            <CanvasNonSSR
              key={i}
              detectAudio={false}
              canvasNo={i}
              makeGlobal={false}
              hydraFunc={template}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
