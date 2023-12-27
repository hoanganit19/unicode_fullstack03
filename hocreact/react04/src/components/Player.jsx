import { useEffect, useState } from "react";
import { useRef } from "react";
import Input from "./Input";

const getTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
const Player = () => {
  const audioRef = useRef();
  const inputRef = useRef();
  const inputTextRef = useRef();
  const [duration, setDuration] = useState(0);
  const handlePlay = () => {
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
  };
  const handleDuration = () => {
    const duration = audioRef.current.duration;
    setDuration(duration);
  };
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const rate = (currentTime * 100) / duration;
    inputRef.current.previousElementSibling.innerText = getTime(currentTime);
    inputRef.current.value = rate;
    inputTextRef.current.value(`${rate.toFixed(2)}%`);
    inputTextRef.current.focus();
    inputTextRef.current.readOnly(true);
  };
  //   useEffect(() => {
  //     inputTextRef.current.remove();
  //   }, []);
  return (
    <div>
      <audio
        src="http://42.96.41.29:880/player/yeu-voi-vang-remix.3821a5a4.mp3"
        ref={audioRef}
        onLoadedData={handleDuration}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <span>00:00</span>
      <input type="range" defaultValue={0} ref={inputRef} step={0.1} />
      <span>{getTime(duration)}</span>
      <hr />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <hr />
      <Input ref={inputTextRef} />
    </div>
  );
};

export default Player;
