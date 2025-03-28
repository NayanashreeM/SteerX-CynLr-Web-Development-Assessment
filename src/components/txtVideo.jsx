import Header from "./header";
import Video from "../assets/video.webm"

const TxtVideo = () => {
  return (
    <>
      <Header />
      <section className="flex mt-4 h-screen w-full justify-center items-center">
        <div className="flex gap-6 w-9/12 h-8/12  mx-auto ">
          <div className="h-full w-fit">
            <video
              autoPlay
              muted
              playsInline
              className=" w-full h-full object-cover"
            >
              <source src={Video} type="video/webm" />
            </video>
          </div>
          <div className="h-full flex gap-y-9 flex-col justify-center w-1/2 text-white p-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-heading font-thin text-5xl text-secondary">
                Video and Text
              </h1>
            </div>
            <p className="font-sans text-[18px] text-base">
            Driving a car is a blend of skill, focus, and freedom. From the moment you start the engine to the thrill of acceleration, every turn and every mile offers a new experience. Whether it’s a daily commute or a long road trip, driving connects you to the road, the machine, and the journey ahead.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TxtVideo;
