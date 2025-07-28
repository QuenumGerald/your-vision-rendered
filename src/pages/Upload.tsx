import { useState } from "react";
import Header from "@/components/Header";
import FileUpload from "@/components/FileUpload";
import ProcessingScreen from "@/components/ProcessingScreen";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = async (file: File) => {
    console.log("Selected file:", file.name);
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight">
            Separate Audio Stems with AI
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Isolate vocals, drums, bass, and other instruments from any song. Upload your audio file to get started.
          </p>
        </div>
        
        <FileUpload onFileSelect={handleFileSelect} />
        
        <footer className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-text-muted">
            © 2024 AudioSplitter. All Rights Reserved.
          </p>
        </footer>
      </main>
      
      {isProcessing && <ProcessingScreen />}
    </div>
  );
};

export default Upload;