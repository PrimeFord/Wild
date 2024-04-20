import { useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./layouts/MainContainer";
import song from "/audios/live.mp3";
import Slider from "./components/slider/Slider";
import { FaPause, FaPlay } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePercentage = (e: any) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play: () => void = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!playing) {
      setPlaying(true);
      audio.play();
    }

    if (playing) {
      setPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e: any) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const times = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(times.toFixed(2));
  };

  return (
    <>
      <MainContainer show={show}>
        <NavBar show={show} setShow={setShow} />
        <div className="relative w-[100%] h-[100vh] bg-[url('/images/bg.png')] bg-[right_bottom_8rem] lg:bg-right bg-no-repeat bg-contain flex flex-col justify-center items-center">
          <img
            className="hidden lg:flex absolute w-12 z-10 left-[55%] top-[6rem]"
            src="/images/angle.svg"
            alt="Angle"
          />
          <img
            className="hidden lg:flex absolute lg:h-[100%] lg:top-0"
            src="/images/5ive.png"
            alt="Bg_vector"
          />
          <img
            className="flex lg:hidden absolute h-[100%] right-0"
            src="/images/5ive2.png"
            alt="Bg_vector"
          />
          <img
            className="hidden lg:flex absolute z-10 w-[15rem] right-0 bottom-0"
            src="/images/ellipse1.png"
            alt="Ellipse"
          />{" "}
          <img
            className="flex lg:hidden absolute z-10 w-[3rem] right-[0rem] bottom-0"
            src="/images/ellipse3.png"
            alt="Ellipse"
          />{" "}
          <img
            className="hidden lg:flex absolute z-10 w-[10rem] left-[2rem] bottom-0"
            src="/images/ellipse2.png"
            alt="Ellipse"
          />
          {/* <p className="absolute top-[60%] w-[100%] text-[24rem] font-[900] text-[#313132] opacity-30 leading-[3rem]">
            LIL5IVE
          </p> */}
          <img
            className="flex absolute top-[60%] lg:top-[45%]"
            src="/images/lil5ive.svg"
            alt="Text"
          />
          <div className="w-[18rem] z-20 lg:w-[16rem] flex justify-center flex-col text-white lg:absolute lg:top-[40%] lg:left-[10rem] mt-[12rem] lg:mt-0 text-center">
            <p className="text-[2rem] leading-[3rem] lg:text-[2.8rem] lg:leading-[3rem] lg:font-[300]">
              NEW SINGLE
            </p>
            <p className="text-[0.75rem] tracking-[0.2rem] leading-[1rem] lg:text-[0.7rem] lg:tracking-[0.25rem] lg:leading-[1rem] font-[300]">
              OUT NOW ON ALL PLATFORMS
            </p>
            <img
              className="h-[5rem] lg:h-[6rem] mt-[1.5rem]"
              src="/images/happy.svg"
              alt="Text"
            />
            {/* <p className="ronet">Happy</p> */}
            <button
              className="h-10 w-10 mx-auto flex justify-center items-center border-[2px] border-solid border-white  hover:scale-110 mt-4 lg:mt-3 rounded-[50%]"
              onClick={play}
            >
              {playing ? (
                // <i
                //   className="fa fa-pause"
                //   style={{ color: "#fff" }}
                //   aria-hidden="true"
                // ></i>
                <FaPause/>
              ) : (
                // <i
                //   className="fa fa-play"
                //   style={{
                //     color: "#fff",
                //     fontSize: "1rem",
                //     height: "1rem",
                //     width: "1rem",
                //   }}
                //   aria-hidden="true"
                // ></i>
                <FaPlay />
              )}
            </button>
            <Slider
              percentage={percentage}
              handlePercentage={handlePercentage}
            />
            <audio
              src={song}
              ref={audioRef}
              onLoadedData={(e) => {
                setDuration(e.currentTarget.duration.toFixed(2));
              }}
              onTimeUpdate={getCurrDuration}
            ></audio>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default App;
