import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  CheckCircle,
  X
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ContactFooter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      if (!supabase) {
        throw new Error("Connection to the backend is not established.");
      }

      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || "Something went wrong. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
          variants={fadeIn}
          className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 border-t border-white/5 mx-auto max-w-7xl"
        >
          <div className="space-y-8 p-6 lg:p-12">
            <div className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">Connect</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight text-white drop-shadow-2xl">Let's Work Together</h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to start your next project? Get in touch with us to discuss how we can help bring your vision to life.
            </p>
            <div className="mt-8 space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Our Location</h3>
                  <p className="text-sm text-gray-300">Ontario, Canada</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email Us</h3>
                  <a href="mailto:samy@samysai.info" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                    samy@samysai.info
                  </a>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Call Us</h3>
                  <a href="tel:+14378292544" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                    +1 (437) 829-2544
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="mt-8 flex space-x-3">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/samys.ai?igsh=bzVxcHdndzBmYTZ3" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://x.com/samys_ai?s=21" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href={social.href}
                    {...(social.href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
                    className="rounded-3xl border border-white/20 bg-white/10 p-2 text-gray-300 hover:text-white hover:border-blue-400/50 transition-colors backdrop-blur-sm"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
            <p className="text-sm text-gray-300 mb-6">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center py-12 space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-400" />
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white"
                  >
                    Message Sent Successfully!
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 text-center max-w-md"
                  >
                    Thank you for reaching out! We've received your message and will get back to you shortly.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium leading-none text-gray-300"
                      >
                        First name
                      </label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        className="rounded-lg bg-white/[0.03] border-white/10 text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium leading-none text-gray-300"
                      >
                        Last name
                      </label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name" 
                        className="rounded-lg bg-white/[0.03] border-white/10 text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none text-gray-300"
                    >
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email" 
                      className="rounded-lg bg-white/[0.03] border-white/10 text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none text-gray-300"
                    >
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message" 
                      className="min-h-[120px] rounded-lg bg-white/[0.03] border-white/10 text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none" 
                    />
                  </div>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-3xl bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
                    >
                      {submitError}
                    </motion.div>
                  )}
                  <motion.div whileHover={{ scale: isLoading ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-lg bg-white text-black font-bold h-12 hover:bg-gray-200 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {/* Book Appointment Button */}
                  <div className="flex justify-center pt-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href="https://calendly.com/samysai/clients"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center space-x-2">
                          <span>📅</span>
                          <span>Book a Strategy Consultation</span>
                          <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-110"></div>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                      </a>
                    </motion.div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
          variants={fadeIn}
          className="container grid gap-12 px-4 py-16 md:px-6 lg:grid-cols-4 mx-auto max-w-7xl"
        >
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                S
              </motion.div>
              <span className="text-xl font-bold tracking-tighter text-white">SamysAI</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses with intelligent AI solutions to scale efficiently and operate smarter.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/ai-phone-callers" preload="intent" className="hover:text-blue-400 transition-colors">AI Phone Callers</Link></li>
              <li><Link to="/services/ai-chatbots" preload="intent" className="hover:text-blue-400 transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/web-development" preload="intent" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services/app-development" preload="intent" className="hover:text-blue-400 transition-colors">App Development</Link></li>
              <li><Link to="/services/cold-email-dashboard" preload="intent" className="hover:text-blue-400 transition-colors">Cold Email Dashboards</Link></li>
              <li><Link to="/services/content-creation" preload="intent" className="hover:text-blue-400 transition-colors">Content Creation</Link></li>

            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest AI insights.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="rounded-full bg-white/5 border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
              <Button size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
        <div className="container border-t border-white/5 px-4 py-6 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} SamysAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;
