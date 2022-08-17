import type { NextPage } from "next";
import dynamic from "next/dynamic";
import TemplateExample from "../data/TemplateExample.json";

const HydraFunctionsArray = TemplateExample[0].templates.map((template) => {
  return `.${template.name}(${template.inputs.map((input) => {
    return `${input.value === null ? input.default : input.value}`;
  })}).out()`;
});

console.log(HydraFunctionsArray);

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
        {HydraFunctionsArray.map((HydraFunction, i) => {
          return (
            <CanvasNonSSR
              key={i}
              detectAudio={false}
              canvasNo={i}
              hydraFunc={HydraFunction}
              width={100}
              height={(100 * 9) / 16}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
