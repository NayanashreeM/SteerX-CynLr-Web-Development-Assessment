import Header from "./header";
import Gif from "../assets/Car GIF.gif"

const TxtGif = () => {
  return (
    <>
      <Header />
      <section className="flex mt-4 h-screen w-full justify-center items-center">
        <div className="flex gap-6 w-9/12 h-8/12  mx-auto ">
          <div className="h-full w-fit">
            <img src={Gif} loading="lazy" className="h-full w-full" />
          </div>
          <div className="h-full flex gap-y-9 flex-col justify-center w-1/2 text-white p-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-heading font-thin text-5xl text-secondary">
                GIF and Text
              </h1>
            </div>
            <p className="font-sans text-[18px] text-base">
            A moving car captures the essence of speed, power, and elegance. The way it glides on the road, the shine of its exterior reflecting the surroundings, and the smooth motion of its wheels create a captivating visual. Whether it's a sharp turn, a burst of acceleration, or the steady cruise on an open highway, every moment showcases the thrill of the drive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TxtGif;
