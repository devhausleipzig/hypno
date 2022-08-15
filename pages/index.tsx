import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MultiCanvasNonSSR = dynamic(() => import("../components/MultiCanvas"), {
    ssr: false,
  });

  console.log("rendered");

  return (
    <div className="flex h-full w-screen">
      <div
        id="feed"
        className="mx-auto flex flex-col p-4 w-1/2 shrink-0 bg-slate-800 text-white space-y-4"
      >
        {/* <p className="w-full text-center text-2xl">visualizer goes here</p> */}
        {/* <CanvasPreview /> */}
        <p className="text-2xl pl-2">Multiple Instances of Hydra</p>
        <MultiCanvasNonSSR />
      </div>
    </div>
  );
};

export default Home;
