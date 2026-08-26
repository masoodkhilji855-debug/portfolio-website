import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Clock, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { ContactSubmission } from '../types';

interface ContactSectionProps {
  prefilledTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledTopic }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    selectedService: 'Full-Stack Web Development',
    projectBudget: '$5k - $15k',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledTopic) {
      setFormData(prev => ({
        ...prev,
        projectDetails: prev.projectDetails 
          ? `${prev.projectDetails}\n[Inquiring regarding: ${prefilledTopic}]` 
          : `I would like to discuss building a project similar to: ${prefilledTopic}`
      }));
    }
  }, [prefilledTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate cyber encrypted transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-3 flex items-center justify-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Contact // Section 04</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Let's Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">Something Extraordinary.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-sans max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Transmit your project requirements to our engineering team in Karachi. 
            We review briefs and respond with preliminary technical scopes within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Agency Credentials & Karachi Node (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Details Card */}
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Direct Channels</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                  <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 block uppercase">Official Email</span>
                    <a href="mailto:contact@kyotech.dev" className="text-xs font-mono text-white hover:text-cyan-400 transition-colors font-bold">
                      contact@kyotech.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                  <div className="p-2 rounded bg-pink-500/10 text-pink-400 border border-pink-500/30 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 block uppercase">Headquarters</span>
                    <span className="text-xs font-mono text-white font-bold block">
                      Karachi, Pakistan
                    </span>
                    <span className="text-[10px] font-mono text-white/50">Global Client Delivery</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                  <div className="p-2 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 block uppercase">Turnaround Time</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold block">
                      &lt; 4 Hours SLA
                    </span>
                    <span className="text-[10px] font-mono text-white/50">Active Monday - Saturday</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Guarantee Pill */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-white/70 flex items-center gap-3 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
              <div>
                <span className="font-bold text-white block text-[11px] uppercase tracking-wider">Strict NDA Guarantee</span>
                <span className="text-white/50 text-[10px]">All project communications and proprietary IP are safeguarded by default.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-white/10 relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in font-mono">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Transmission Received // 200 OK
                </h3>
                
                <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-bold">{formData.fullName}</span>. 
                  Our engineering leads in Karachi have received your brief and will contact you at <span className="text-pink-400">{formData.email}</span> within 4 hours.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        selectedService: 'Full-Stack Web Development',
                        projectBudget: '$5k - $15k',
                        projectDetails: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-md bg-white/10 border border-white/20 text-xs font-mono text-cyan-300 hover:text-white transition-colors uppercase font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="agency-contact-form">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
                    Transmit Project Brief
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/30 font-mono">
                    Encrypted Form
                  </span>
                </div>

                {/* 1. Name & 2. Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/60 mb-1 uppercase tracking-wider">
                      Your Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Masood Khilji"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 font-sans"
                      id="contact-form-name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/60 mb-1 uppercase tracking-wider">
                      Email Address <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 font-sans"
                      id="contact-form-email"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/60 mb-1 uppercase tracking-wider">
                      Service Category
                    </label>
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0d0d12] border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                      id="contact-form-service"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Custom API Integration">Custom API Integration</option>
                      <option value="Cloud Infrastructure">Cloud Infrastructure & DevOps</option>
                      <option value="E-commerce Solutions">Headless E-Commerce Solutions</option>
                      <option value="High-Frequency / Web3">High-Frequency / Web3 Platform</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/60 mb-1 uppercase tracking-wider">
                      Target Budget (USD)
                    </label>
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0d0d12] border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                      id="contact-form-budget"
                    >
                      <option value="<$5k">&lt; $5,000 (Sprint MVP)</option>
                      <option value="$5k - $15k">$5,000 - $15,000 (Standard Platform)</option>
                      <option value="$15k - $40k">$15,000 - $40,000 (Enterprise Scale)</option>
                      <option value="$40k+">$40,000+ (Full Turnkey Ecosystem)</option>
                    </select>
                  </div>
                </div>

                {/* 3. Project Details */}
                <div>
                  <label className="block text-[10px] font-mono text-white/60 mb-1 uppercase tracking-wider">
                    Project Details & Goals <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your project, timeline, key features, or reference architecture..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 font-sans"
                    id="contact-form-details"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-md shadow-lg shadow-purple-500/20 hover:shadow-cyan-400/40 transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                  id="contact-form-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Encrypted Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Brief to Karachi Labs</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
