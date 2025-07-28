import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Header from "@/components/Header";
import AudioTrackItem from "@/components/AudioTrackItem";

const Results = () => {
  const tracks = [
    { name: "Flute", duration: "0:45" },
    { name: "Violin I", duration: "0:45" },
    { name: "Violin II", duration: "0:45" },
    { name: "Cello", duration: "0:45" },
  ];

  const handleDownloadAll = () => {
    console.log("Downloading all tracks");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Your Separated Stems
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Here are the individual audio tracks from your file. Listen to each one or download them to use in your projects.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-6">
            <Button variant="brand" onClick={handleDownloadAll} className="gap-2">
              <Download className="w-4 h-4" />
              Download All
            </Button>
          </div>
          
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <AudioTrackItem
                key={index}
                name={track.name}
                duration={track.duration}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;