import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cobalt rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cobalt rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center animate-fade-in">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-typewriter text-cobalt mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-typewriter text-foreground mb-4">Oops! Page not found</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this page doesn't exist. Let's get you back on track.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-cobalt to-[#0066dd] text-white hover:opacity-90 transition-opacity shadow-lg text-base sm:text-lg px-8 py-6"
        >
          <Home className="mr-2 w-5 h-5" />
          Return to Home
        </Button>
      </div>

      {/* Footer credit */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center px-4">
        <p className="text-xs text-muted-foreground font-typewriter">
          For the ones ready to be seen ✨
        </p>
      </div>
    </div>
  );
};

export default NotFound;
