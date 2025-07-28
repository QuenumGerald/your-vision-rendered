import { Loader2 } from "lucide-react";

const ProcessingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-surface-primary border border-border rounded-xl p-8 max-w-md w-full mx-4 shadow-card">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            Separating stems...
          </h2>
          
          <p className="text-text-secondary">
            This may take a few moments. Please don't close this window.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-brand-green" />
            <span className="text-text-muted">Processing...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingScreen;