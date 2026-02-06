import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#02040a] min-h-screen">
       
       {/* Hero Section - Standardized Premium Header */}
       <div className="relative pt-48 pb-24 overflow-hidden bg-[#050914] border-b border-white/5">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         {/* Grid Lines */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="opacity-0 animate-fade-in-up [animation-delay:0ms]">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 block">
                Get In Touch
              </span>
            </div>
            <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Contact Us
              </h1>
            </div>
            <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Questions? Support? Free Trial? We're here to help you succeed.
              </p>
            </div>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
         <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
         <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            {/* Contact Info */}
            <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8">Get in Touch</h2>
                <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                    Whether you need a demo, technical support, or pricing information, our team is ready to assist you.
                </p>
                
                <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                        <div className="bg-white/5 p-4 rounded-2xl text-cyan-400 border border-white/10 group-hover:border-cyan-500/50 transition-colors"><Phone size={24} /></div>
                        <div>
                            <h3 className="font-bold text-white text-lg mb-1">Phone</h3>
                            <p className="text-gray-400 font-mono">1-408-713-1400</p>
                            <p className="text-xs text-gray-600 mt-1 font-mono">Mon-Fri 9am-6pm PST</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                        <div className="bg-white/5 p-4 rounded-2xl text-purple-400 border border-white/10 group-hover:border-purple-500/50 transition-colors"><Mail size={24} /></div>
                        <div>
                            <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                            <p className="text-gray-400 text-sm"><span className="text-gray-600 uppercase text-xs tracking-wider font-bold">General:</span> info@vornexinc.com</p>
                            <p className="text-gray-400 text-sm"><span className="text-gray-600 uppercase text-xs tracking-wider font-bold">Support:</span> support@vornexinc.com</p>
                            <p className="text-gray-400 text-sm"><span className="text-gray-600 uppercase text-xs tracking-wider font-bold">Sales:</span> sales@vornexinc.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                        <div className="bg-white/5 p-4 rounded-2xl text-emerald-400 border border-white/10 group-hover:border-emerald-500/50 transition-colors"><MapPin size={24} /></div>
                        <div>
                            <h3 className="font-bold text-white text-lg mb-1">Office</h3>
                            <p className="text-gray-400 leading-relaxed">43575 Mission Blvd. Suite 613<br/>Fremont, CA 94539, USA</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-[#0f172a] p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                    <h3 className="font-bold text-white mb-2 relative z-10">Existing Customer?</h3>
                    <p className="text-gray-400 text-sm mb-6 relative z-10">Visit our support portal for documentation, tickets, and downloads.</p>
                    <button className="text-blue-400 font-bold hover:text-white transition-colors flex items-center gap-2 relative z-10 text-sm">
                        Go to Support Portal <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* Form */}
            <div className="bg-[#0f172a] rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl relative">
                <h2 className="text-2xl font-bold text-white mb-8 font-display">Send us a Message</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-[#050914] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-[#050914] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Work Email</label>
                        <input type="email" className="w-full px-4 py-3 bg-[#050914] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Company</label>
                        <input type="text" className="w-full px-4 py-3 bg-[#050914] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#050914] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none">
                                <option>Request Free Trial</option>
                                <option>Schedule Demo</option>
                                <option>Pricing Inquiry</option>
                                <option>Technical Support</option>
                                <option>Other</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <ArrowRight size={14} className="rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 bg-[#050914] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"></textarea>
                    </div>

                    <button type="button" className="w-full bg-white hover:bg-cyan-50 text-[#050914] font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-4">
                        Submit Inquiry
                    </button>
                    
                    <p className="text-xs text-gray-600 text-center mt-4">
                        By submitting this form, you agree to our Privacy Policy.
                    </p>
                </form>
            </div>
         </div>
       </div>
    </div>
  );
};

export default Contact;