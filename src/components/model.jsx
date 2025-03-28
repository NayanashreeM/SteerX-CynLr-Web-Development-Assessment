import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../assets/Scene";
import { Suspense } from "react";


const Model3d = () => {
  const [color, setColor] = useState("#03C988");

  return (
    <>
      <section id="3dConfigurator" className="h-screen scroll-mt-10 w-full">
        <h1 className=" text-5xl mt-32 font-thin font-heading text-white text-center">
          <span className="text-secondary ">3D </span>
          Configurator
        </h1>
        <div className=" flex  w-5/6 mx-auto mt-20 h-4/6">
          <div className=" p-5 w-1/2 h-full border-white">
            <p className="text-2xl font-sans text-base">
            Explore every detail with our 3D Car Model. Rotate, zoom, and view the car from any angle to see its design up close. From sleek exteriors to detailed interiors, experience a lifelike preview before making your choice.
            </p>
            <p className="text-[18px] font-bold mt-4 font-sans text-[#00818A]">
              Pick a shade that suits your ride:
            </p>
            <div className="flex justify-evenly mt-10 gap-4 my-4">
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-base ring-offset-2  bg-[#03C988] "
                onClick={() => setColor("#03C988")}
              ></button>
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-base ring-offset-2  bg-[#750E21]"
                onClick={() => setColor("#750E21")}
              ></button>
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-base ring-offset-2  bg-[#EBEBED]"
                onClick={() => setColor("#EBEBED")}
              ></button>
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-base ring-offset-2  bg-[#4B70F5]"
                onClick={() => setColor("#4B70F5")}
              ></button>
            </div>
            ;
          </div>
          <div className="border-white w-1/2 h-full bg-[#151619] rounded-lg ">
            <Canvas
              camera={{ position: [0, 2, 5], fov: 50 }}
              className="-mt-15 p-4"
            >
              <ambientLight intensity={2} />
              <directionalLight position={[5, 20, 5]} intensity={8} />
              <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 2}
                enablePan={false}
              />
              <Suspense fallback={null}>
                <Model color={color} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default Model3d;
