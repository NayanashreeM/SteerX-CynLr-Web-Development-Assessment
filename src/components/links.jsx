import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "../assets/short.jpg";
import Gif from "../assets/Car GIF.gif";
import Pdf from "../assets/bently.png";
import Video from "../assets/video.png";


const Links = () => {
   const [position, setPosition] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        
      });
  const [isHovered, setIsHovered] = useState(false);
  const [linktext, setLinkText] = useState("");
 

  const tooltipRef = useRef(null);

  const handleMouseOver = (e) => {
    let linkPosition = e.target.getBoundingClientRect();
    e.target.innerText;
    setPosition({
      bottom: linkPosition.bottom,
      left: linkPosition.left + 50,
      right: linkPosition.right,
      top: linkPosition.top,
    });
    setIsHovered(true);
    setLinkText(e.target.innerText.trim());
  };

  const linkInfo = {
    style: {
      image: Image,
      title: "Image and Text",
    },
    cars: {
        image: Pdf,
        title: "PDF and text",
      },
      driving : {
        image: Video,
        title: "4k Video and text",
      },
      ride: {
      image: Gif,
      title: "GIF and text",
    },
    
   
  };

  useGSAP(() => {
    if (isHovered) {
      gsap.fromTo(
        tooltipRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: "top center" },
        { opacity: 1, scaleY: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isHovered]);

  return (
    <section className=" sm:h-76 sm:w-full bg-dark flex sm:justify-center sm:items-center">
      <div className=" relative  sm:w-9/12 flex justify-center gap-x-12  border-white sm:mt-20">
        <h1 className="sm:text-6xl font-heading text-secondary font-thin">
          Drive <span className="text-white">Beyond</span>
        </h1>

        <p className="text-base font-sans  text-2xl">
        Experience the perfect blend of performance, {" "}
          <a
            onMouseEnter={handleMouseOver}
            onMouseLeave={() => setIsHovered(false)}
            href="/txtImage"
            className=" text-secondary"
          >
          style
          </a>{" "}
          and innovation. Whether you're looking for speed, luxury, or cutting-edge technology, our collection of {" "}
          <a
            href="/txtpdf"
            onMouseEnter={handleMouseOver}
            onMouseLeave={() => setIsHovered(false)}
            className=" text-secondary"
          >
            cars
          </a>{" "}
          is designed to elevate your {" "}
          <a
            onMouseEnter={handleMouseOver}
            onMouseLeave={() => setIsHovered(false)}
            className=" text-secondary"
            href="/txtVideo"
          >
          driving 
          </a>{" "}
          experience. Explore top models, compare features, and find the perfect{" "}
          <a
            onMouseEnter={handleMouseOver}
            onMouseLeave={() => setIsHovered(false)}
            className=" text-secondary"
            href="/txtgif"
          >
            ride
          </a>{" "}
          that matches your lifestyle.
        </p>
        {isHovered && linktext in linkInfo && (
          <div
            ref={tooltipRef}
            className="fixed z-50 bg-[#151619] flex flex-col h-fit w-64 gap-2 text-white p-3 rounded-lg shadow-lg transition-opacity duration-300 pointer-events-none"
            style={{
              left: `${position.left}px`,
              top: `${position.top}px`,
              bottom: `${position.bottom}px`,
              right: `${position.right}px`,
            }}
          >
            <img
              src={linkInfo[linktext].image}
              className="h-44 w-full object-cover"
            />
            <h1 className="font-heading text-2xl font-thin text-secondary ">
              {linkInfo[linktext].title}
            </h1>
            <p className="font-sans text-[.9rem] text-base">
              Get an early look at CARS--<span className="text-red-700">don't miss out!</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Links;
