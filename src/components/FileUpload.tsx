import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Cloud, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const audioFile = files.find(file => file.type.startsWith('audio/'));
    
    if (audioFile) {
      onFileSelect(audioFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a WAV audio file.",
        variant: "destructive",
      });
    }
  }, [onFileSelect, toast]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
          isDragOver
            ? "border-brand-green bg-brand-green/5"
            : "border-border hover:border-brand-green/50"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center">
            <Cloud className="w-8 h-8 text-text-secondary" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text-primary">
              Drop your WAV here
            </h3>
            <p className="text-text-secondary">or</p>
          </div>
          
          <div className="relative">
            <input
              type="file"
              accept="audio/wav,audio/x-wav"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="brand" size="lg" className="relative">
              <Upload className="w-4 h-4" />
              Choose Audio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;