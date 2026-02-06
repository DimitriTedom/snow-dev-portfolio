
import Layout from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send, Twitter } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from 'emailjs-com';

const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const user = import.meta.env.VITE_PUBLIC_KEY;
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init(user);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // EmailJS integration
    emailjs.sendForm(
        service,
        template,
      formRef.current!,
        user
    )
    .then((result) => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      console.log('SUCCESS!', result.text);
    }, (error) => {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      console.error('FAILED...', error.text);
    });
  };
  
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SlideUp>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-orange-500" />
                        Send Me a Message
                      </h2>
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Your Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Your Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Project Inquiry"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Hello, I'd like to talk about..."
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="resize-none"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full"
                          variant="action"
                          size="pill"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </SlideUp>
              </div>
              
              <div>
                <SlideUp delay={0.1}>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        Contact Info
                      </h2>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium">Email Address</p>
                          <a 
                            href="mailto:dimitritedom@gmail.com"
                            className="text-muted-foreground hover:text-orange-400 transition-colors flex items-center gap-2 mt-1"
                          >
                            <Mail className="h-4 w-4" />
                            dimitritedom@gmail.com
                          </a>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium">Location</p>
                          <a href={"https://maps.app.goo.gl/cJvQQk71Rt4iWBC2A"}
                          >
                          <p className="text-muted-foreground hover:text-orange-400 transition-colors flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4" />
                            RFJW+9RJ, Yaoundé
                          </p>
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <p className="text-sm font-medium mb-4">Connect with me</p>
                        <div className="flex space-x-4">
                          <a 
                            href="https://github.com/DimitriTedom"
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-secondary hover:bg-secondary/80 p-2 rounded-md transition-colors"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/tedom-tafotsi-dimitri-wilfried-b70502298/"
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-secondary hover:bg-secondary/80 p-2 rounded-md transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a 
                            href="https://x.com/DimitriTedom"
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-secondary hover:bg-secondary/80 p-2 rounded-md transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </a>
                          <a
                              href="https://t.me/SnowDev5"
                              target="_blank"
                              rel="noreferrer"
                              className="bg-secondary hover:bg-secondary/80 p-2 rounded-md transition-colors"
                          >
                            <Send className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-0">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold">Availability</h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Currently accepting new projects and collaboration opportunities.
                      </p>
                      <div className="mt-4 p-2 bg-orange-500/20 rounded-full inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                          Available for Hire
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
