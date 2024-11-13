import {carDetection, heroBackground, module2Four, module2Thumb, robot} from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import videojs from "video.js";
import VideoPlayer from "./VideoPlayer.jsx";

const Hero = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: module2Thumb,
    sources: [{
      src: 'src/assets/videos/ModuleTwo.mp4',
      type: 'video/mp4'
    }]
  };

  function handlePlayerReady(player) {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  }
  
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative pb-10 lg:pb-0" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Building a Security Camera using Computer Vision
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Discover how motion detection with python can be applied to real world scenarios
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-1 rounded-2xl bg-conic-gradient flex items-center justify-center flex-col overflow-hidden">
            <div className={'w-[358px] md:w-[1016px] rounded-2xl overflow-hidden'}>
              <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          </div>
          <div className="absolute -top-[200%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
        
        {/*<CompanyLogos className="hidden relative z-10 mt-20 lg:block" />*/}
    </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
