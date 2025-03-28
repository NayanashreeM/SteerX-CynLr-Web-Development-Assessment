import InstargamIcon from "../assets/instagram icon.png"
import FacebookIcon from "../assets/facebook icon.png"
import YoutubeIcon from "../assets/youtube icon.png"
import TwitterIcon from "../assets/twitter icon.png"

const FooterSection = () => {
    return (
      <>
        <footer className="flex justify-between px-8 py-6">
          <div className="text-white text-4xl font-bold  font-banner italic">
             Steer<span  className="text-secondary">X</span>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-white font-bold font-heading text-[18px]">Social Links:</p>
            <a
            href="https://www.instagram.com/"
            target="/blank"
            className="hover:text-secondary hover:duration-150"
          >
            <img src={InstargamIcon} alt="instagram icon"  className="w-10"/> 
          </a>
          <a
            href="https://www.facebook.com/"
            target="/blank"
            className="hover:text-secondary hover:duration-150"
          >
             <img src={FacebookIcon} alt="facebook icon"  className="w-10"/> 
          </a>
          <a
            href="https://www.youtube.com/"
            target="/blank"
            className="hover:text-secondary hover:duration-150"
          >
             <img src={YoutubeIcon} alt="youtube icon"  className="w-10"/> 
          </a>
          <a
            href="https://x.com/"
            target="/blank"
            className="hover:text-secondary hover:duration-150"
          >
            <img src={TwitterIcon} alt="twitter icon"  className="w-10"/> 
          </a>  
          </div>
          <p className="text-white font-thin font-heading">
            Designed By{" "}
            <a
              href="https://github.com/NayanashreeM"
              target="_blank"
              className="text-secondary inline-block hover:underline hover:underline-offset-4 "
            >
              Nayanashree M
            </a>
          </p>
        </footer>
      </>
    );
  };
  
  export default FooterSection;