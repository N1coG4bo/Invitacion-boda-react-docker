import { Pause, Play, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33); // Simulado

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
            onValueChange={(val) => setProgress(val[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>01:10</span>
            <span>04:10</span>
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Shuffle className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <SkipBack className="w-6 h-6" />
          </Button>

          <Button 
            size="icon" 
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-transform hover:scale-105"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </Button>

          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <SkipForward className="w-6 h-6" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
