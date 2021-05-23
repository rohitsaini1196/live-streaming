import { useState, useEffect, useRef } from "react";
import "./App.css";
import videojs from "video.js";
import axios from "axios";

const usePlayer = ({ src, controls, autoplay }) => {
  const options = {
    fill: true,
    fluid: true,
    preload: "auto",
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  };
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls,
      autoplay,
      sources: [src],
    });
    setPlayer(vjsPlayer);

    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
  }, []);
  useEffect(() => {
    if (player !== null) {
      player.src({ src });
    }
  }, [src]);

  return videoRef;
};

function App() {
  const src = {
    src: "http://127.0.0.1:8888" + "/live/" + "randomKey" + "/index.m3u8",
    type: "application/x-mpegURL",
  };

  const controls = false;
  const autoplay = false;

  const playerRef = usePlayer({ src, controls, autoplay });

  return (
    <div className="App">
      <div style={{ width: "50%" }}>
        <div data-vjs-player>
          <video ref={playerRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
