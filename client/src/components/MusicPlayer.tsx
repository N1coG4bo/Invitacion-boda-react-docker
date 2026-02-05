import { Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

// Helper function to format time from seconds to MM:SS
const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return "00:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio object
  useEffect(() => {
    // The path is relative to the `public` folder
    audioRef.current = new Audio('/music/cancion-boda-mp3.mp3');

    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
    }

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    }

    // Event listeners
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', updateProgress);

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', updateProgress);
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(value[0]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-primary/10">
      <h3 className="text-center font-bold text-lg mb-6">¡DALE PLAY A NUESTRA CANCIÓN!</h3>
      
      <div className="space-y-4">
        {/* Barra de progreso */}
        <div className="space-y-2">
          <Slider 
            value={[progress]} 
            max={100} 
            step={1} 
            className="cursor-pointer"
            onValueChange={handleSliderChange}
          />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <Button 
            size="icon" 
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-transform hover:scale-105"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
