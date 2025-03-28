import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";
import BannerVideo from "../assets/banner.mp4";



const Banner = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null); 
  const videoRef = useRef(null); 
  

  const handleVideoEnd = () => {
    gsap.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 50 });
  });

  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={handleVideoEnd}
        >
          <source src={BannerVideo} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div  ref={logoRef} className="text-white text-[180px] font-bold italic font-banner tracking-widest ">
            Steer<span  className="text-secondary">X</span>
          </div>
          <p ref={textRef} className="mt-13 text-white text-5xl font-sans ">
             <span className="text-secondary">Smart Moves</span> <span className="text-white">Bold Directions</span>  
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
