import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
              <Upload className="w-4 h-4 text-brand-green-foreground" />
            </div>
            <span className="text-xl font-bold text-text-primary">StemSplitter</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="brand" size="sm">
              + New Split
            </Button>
            <div className="w-8 h-8 rounded-full bg-brand-green overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;