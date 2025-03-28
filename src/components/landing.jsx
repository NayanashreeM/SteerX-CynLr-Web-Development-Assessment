import Banner from "./banner";
import Links from "./links";
import ImageSlider from "./imageSlider";
import Model3d from "./model";
import FooterSection from "./footerSection";
import Video4k from "../assets/video4k.mp4";

const Landing = () => {
  return (
    <>
     <Banner />
     <div  id ="links" className=" text-5xl font-thin font-heading text-white text-center mt-29 ">
          <span className="text-secondary ">L</span>inks
        </div>
     <Links />
     <Model3d />
     <div id="4kVideo" className=" text-5xl font-thin font-heading text-white text-center mb-6">
          <span className="text-secondary ">4K</span>
          {" "} Video Optimisation
        </div>
     <div className="w-9/12 h-8/12 m-auto" >
                 <video
                   autoPlay
                   muted
                   playsInline
                   className=" w-full h-full object-cover"
                 >
                   <source src={Video4k} type="video/webm" />
                 </video>
               </div>
     <ImageSlider />
     <div className=" text-[20px] font-thin font-heading text-white text-center">
        Company {" "}<span className="text-secondary ">Moto</span>
        <p className="text-[16px]">
        Providing an extraordinary journey into the future – a future in which sustainability will be paramount. <br /> making an significant leaps forward, from concept cars featuring electric powertrains to launches of hybrid vehicles. 
        </p>
        </div>

     
     <FooterSection />
    </>
  );
};

export default Landing;

