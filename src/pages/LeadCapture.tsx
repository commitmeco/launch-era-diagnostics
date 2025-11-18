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
      console.log('Adding subscriber...');

      // Call the Netlify serverless function instead of directly calling Flodesk API
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      const data = await response.json();
      console.log('Subscription Response:', response.status, data);

      if (!response.ok) {
        console.error('Subscription Error:', {
          status: response.status,
          data: data
        });
        throw new Error(data.error || 'Failed to subscribe. Please try again.');
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
            Check Your Email! 📧
          </h1>

          <p className="text-base sm:text-lg text-foreground/80 mb-6 max-w-md mx-auto">
            We've sent your <span className="font-semibold text-cobalt">Launch Era Kit</span> to <span className="font-semibold">{formData.email}</span>
          </p>

          <div className="bg-card border-2 border-cobalt/30 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">What's in your kit:</h3>
            <ul className="text-left text-sm sm:text-base text-foreground/70 space-y-2">
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                <span>Custom launch strategy for your era</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                <span>Social media templates & captions</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                <span>Launch timeline checklist</span>
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Don't see it? Check your spam folder or{" "}
            <button
              onClick={() => setIsSubmitted(false)}
              className="underline hover:text-foreground transition-colors"
            >
              try again
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cobalt rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cobalt rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cobalt rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cobalt/10 rounded-full border border-cobalt/30 shadow-lg">
            <Download className="w-4 h-4 text-cobalt" />
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-cobalt">
              Free Download
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-card border-2 border-cobalt/30 rounded-lg p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-typewriter text-foreground mb-3 leading-tight">
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-cobalt to-[#0066dd] bg-clip-text text-transparent">
                Launch Era Kit
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Custom strategies, templates, and checklists tailored to your launch style
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 text-base"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-cobalt to-[#0066dd] text-white hover:opacity-90 transition-opacity shadow-lg text-base sm:text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Sending...</span>
                </>
              ) : (
                <>
                  <Download className="mr-2 w-5 h-5" />
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
