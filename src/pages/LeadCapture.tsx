import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Download, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCapture = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Oops!",
        description: "Please fill in both fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const flodeskKey = import.meta.env.VITE_FLODESK_API_KEY;

      if (!flodeskKey) {
        throw new Error('Flodesk API key is not configured. Please add VITE_FLODESK_API_KEY to your environment variables.');
      }

      console.log('Adding subscriber to Flodesk...');

      // Get segment ID from environment variable
      const segmentId = import.meta.env.VITE_FLODESK_SEGMENT_ID;

      // Add subscriber to Flodesk
      const response = await fetch('https://api.flodesk.com/v1/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(flodeskKey + ':')}`,
        },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.name,
          ...(segmentId && { segment_ids: [segmentId] }),
        }),
      });

      const data = await response.json();
      console.log('Flodesk Response:', response.status, data);

      if (!response.ok) {
        console.error('Flodesk API Error:', {
          status: response.status,
          statusText: response.statusText,
          data: data
        });
        throw new Error('Failed to subscribe: ' + (data.message || data.error || 'Please try again'));
      }

      // Success - subscriber added to Flodesk
      setIsSubmitted(true);
      toast({
        title: "Success! 🎉",
        description: "Check your email for your Launch Era Kit!",
      });
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 sm:py-12 px-4 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-cobalt rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cobalt rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-xl relative z-10 text-center animate-slide-up">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cobalt to-[#0066dd] rounded-full mb-6 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-typewriter text-foreground mb-4 leading-tight">
            You're In! ✨
          </h1>

          <p className="text-base sm:text-lg text-foreground/80 mb-6 max-w-md mx-auto">
            Thanks for signing up, <span className="font-semibold text-cobalt">{formData.name}</span>!
            <br />
            Scroll down to get started.
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Need to update your info?{" "}
            <button
              onClick={() => setIsSubmitted(false)}
              className="underline hover:text-foreground transition-colors"
            >
              Edit your submission
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start sm:justify-center py-6 sm:py-12 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cobalt rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cobalt rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cobalt rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Badge */}
        <div className="text-center mb-4 sm:mb-6 mt-4 sm:mt-0">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cobalt/10 rounded-full border border-cobalt/30 shadow-lg">
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cobalt" />
            <span className="text-xs font-medium tracking-wider uppercase text-cobalt">
              Free Download
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-card border-2 border-cobalt/30 rounded-lg p-5 sm:p-8 shadow-2xl">
          <div className="text-center mb-5 sm:mb-6">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-typewriter text-foreground mb-2 sm:mb-3 leading-tight px-2">
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-cobalt to-[#0066dd] bg-clip-text text-transparent">
                Launch Era Kit
              </span>
            </h1>
            <p className="text-xs sm:text-base text-muted-foreground px-2">
              Custom strategies, templates, and checklists tailored to your launch style
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-10 sm:h-12 text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-10 sm:h-12 text-sm sm:text-base"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 sm:h-12 bg-gradient-to-r from-cobalt to-[#0066dd] text-white hover:opacity-90 transition-opacity shadow-lg text-sm sm:text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Sending...</span>
                </>
              ) : (
                <>
                  <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Send Me the Kit
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground font-typewriter">
            For the ones ready to be seen ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
