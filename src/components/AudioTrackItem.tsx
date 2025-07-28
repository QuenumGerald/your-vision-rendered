import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Download, Music } from "lucide-react";

interface AudioTrackItemProps {
  name: string;
  duration: string;
  audioUrl?: string;
}

const AudioTrackItem = ({ name, duration, audioUrl }: AudioTrackItemProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Audio playback logic would go here
  };

  const handleDownload = () => {
    // Download logic would go here
    console.log(`Downloading ${name}`);
  };

  return (
    <div className="bg-surface-primary border border-border rounded-lg p-4 flex items-center gap-4 hover:bg-surface-secondary transition-colors">
      <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
        <Music className="w-5 h-5 text-brand-green" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-text-primary truncate">{name}</h3>
        <p className="text-sm text-text-muted">{duration}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePlayPause}
          className="w-10 h-10 p-0 hover:bg-brand-green/10"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-text-primary" />
          ) : (
            <Play className="w-4 h-4 text-text-primary" />
          )}
        </Button>
        
        <Button
          variant="brand-outline"
          size="sm"
          onClick={handleDownload}
          className="whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default AudioTrackItem;