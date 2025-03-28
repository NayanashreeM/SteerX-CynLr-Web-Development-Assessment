import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";



gsap.registerPlugin(ScrollTrigger);

const ImageSlider = () => {
  const containerRef = useRef();
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.to(containerRef.current, {
      rotation: -270,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.8,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: (progress) => Math.round(progress * 3) / 3,
          duration: 0.2,
          ease: "none",
        },
      },
    });
  }, []);

  const images = [
    {
      path: Image1,
      title: "Face of Power",
      text: "Bold design, unstoppable presence.",
    },
    {
      path: Image2,
      title: "Control in Your Hands",
      text: "Precision, power and the thrill of the drive.",
    },
    {
      path: Image3,
      title: "Push the Limits",
      text: "Speed, power and precision in every mile.",
    },
    {
      path: Image4,
      title: "Roll with Power",
      text: "Grip the road, own the journey",
    }, 
  ];
  return (
    <>
      <section
        id="imageslider"
        ref={sectionRef}
        className="relative mt-20 h-screen w-full overflow-hidden text-center"
      >
        <h1
          id="triggerHeading"
          className=" absolute top-10 left-1/2 -translate-x-1/2 text-5xl font-thin font-heading text-white text-center"
        >
          <span className="text-secondary ">Shift The Future</span>
          <br /> Accelerate with Confidence
        </h1>
        <div className="  w-screen h-screen mx-auto  overflow-hidden ">
          <div
            ref={containerRef}
            className="fixed top-[65rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[70rem] rounded-full border-2 border-base/10 flex items-center justify-center"
          >
            {/* top center */}
            <div className=" absolute left-1/2 -top-72 -translate-x-1/2 rotate-0 flex-col flex bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden">
              <div className=" w-full h-5/6 overflow-hidden rounded-lg ">
                <img
                  loading="lazy"
                  src={images[0].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-secondary">
                  {images[0].title}
                </h2>
                <p className="mt-2 text-sm text-base">{images[0].text}</p>
              </div>
            </div>
            {/* right center */}
            <div className=" absolute -right-72 top-1/2 -translate-y-1/2 rotate-90  flex flex-col  bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden ">
              <div className="w-full h-5/6 overflow-hidden  rounded-lg ">
                <img
                  loading="lazy"
                  src={images[1].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-secondary">
                  {images[1].title}
                </h2>
                <p className="mt-2 text-sm text-base">{images[1].text}</p>
              </div>
            </div>

            {/* top left */}
            <div className=" -left-72 top-1/2 -translate-y-1/2 -rotate-90 absolute flex flex-col bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden ">
              <div className=" w-full h-5/6 rounded-lg overflow-hidden ">
                <img
                  loading="lazy"
                  src={images[2].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-secondary">
                  {images[2].title}
                </h2>
                <p className="mt-2 text-sm text-base">{images[2].text}</p>
              </div>
            </div>
            {/* bottom left */}
            <div className=" absolute left-1/2 -bottom-72 flex flex-col -translate-x-1/2 rotate-180 bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden ">
              <div className=" w-full h-5/6 overflow-hidden  rounded-lg ">
                <img
                  loading="lazy"
                  src={images[3].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-secondary">
                  {images[3].title}
                </h2>
                <p className="mt-2 text-sm text-base">{images[3].text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full"></div>
      </section>
    </>
  );
};

export default ImageSlider;
