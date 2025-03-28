import HamburgerIcon from "../assets/hamburger.png"
import ProfileIcon from "../assets/profile icon.png"

const Header = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-transparent z-30">
        <div className="text-white text-4xl font-bold italic flex items-center gap-5">
           <img src={HamburgerIcon} alt="hamburger icon"  className="w-11"/> 
          <div className="font-banner">Steer<span  className="text-secondary">X</span> </div> 
        </div>
        <div className="flex items-center gap-8 text-[18px]">
          <a
            href="#links"
            className="px-2 py-1 border-2 border-secondary hover:duration-150 rounded-lg hover:bg-secondary hover:text-white transition font-sans text-secondary "
          >
            Links
          </a>
          <a
            href="#3dConfigurator"
            className="px-2 py-1 border-2 border-secondary hover:duration-150 rounded-lg hover:bg-secondary hover:text-white transition font-sans text-secondary "
          >
            3D Configurator
          </a>
          <a
            href="#4kVideo"
            className="px-2 py-1 border-2 border-secondary hover:duration-150 rounded-lg hover:bg-secondary hover:text-white transition font-sans text-secondary "
          >
            4K Video
          </a>
         
          <a
            href="#imageslider"
            className="px-2 py-1 border-2 border-secondary hover:duration-150 rounded-lg hover:bg-secondary hover:text-white transition font-sans text-secondary "
          >
            ImageSlider
          </a>
          <a
            href="https://www.bentleymotors.com/en.html"
            target="_blank"
            className="px-2 py-1 border-2 border-secondary hover:duration-150 rounded-lg hover:bg-secondary hover:text-white transition font-sans text-secondary "
          >
            Explore More
          </a>
          <img src={ProfileIcon} alt="Profil icon"  className="w-11"/>   
        </div>
      </nav>
    </>
  );
};

export default Header;

