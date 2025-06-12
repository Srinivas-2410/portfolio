import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from 'lucide-react';

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(""); // <-- NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setConfirmation(""); // Clear previous message

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFields({ name: "", email: "", message: "" });
        setConfirmation("✅ Message sent successfully!");
      } else {
        const errorData = await res.json();
        setConfirmation(`❌ ${errorData.error || 'Failed to send message.'}`);
      }
    } catch (error) {
      setConfirmation(`❌ Failed to send message: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-6xl">
      <div className="min-h-[90vh] flex flex-col justify-center py-6 md:py-12 gap-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground font-sans">
          Contact Me
        </h2>

        <div className="w-full max-w-md mx-auto space-y-6 p-4 md:p-6 rounded-lg
          border border-border/50 bg-card/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Name"
                value={fields.name}
                onChange={(e) => setFields({ ...fields, name: e.target.value })}
                required
                className="transition-transform duration-200 hover:scale-[1.01] focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={fields.email}
                onChange={(e) => setFields({ ...fields, email: e.target.value })}
                required
                className="transition-transform duration-200 hover:scale-[1.01] focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Your message"
                value={fields.message}
                onChange={(e) => setFields({ ...fields, message: e.target.value })}
                required
                className="min-h-[120px] transition-transform duration-200 hover:scale-[1.01] focus:scale-[1.01]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
          {confirmation && (
            <div className={`mt-4 text-center font-medium ${confirmation.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {confirmation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
