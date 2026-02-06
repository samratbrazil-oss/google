import React from 'react';
import { Target, MapPin, Trophy, Users, Code2 } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="bg-[#02040a] min-h-screen">
       {/* Hero Section - Standardized Premium Header */}
      <div className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-0 animate-fade-in-up [animation-delay:0ms]">
             <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 block">
               Since 2013
             </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
               About Vornex
             </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
               Innovating enterprise QA solutions from the heart of Silicon Valley.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
         <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
         <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

         {/* Mission */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 relative z-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 font-display">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><Target size={24} /></div>
                    Our Mission
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Our core mission is to provide efficient and cost-effective solutions for time shift testing. We are committed to continual innovation, utilizing new technologies and customer feedback to refine our flagship product, TimeShiftX.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-cyan-500 pl-6">
                    We value innovation, flexibility, and exceptional customer service above all else.
                </p>
            </div>
            <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Decorative BG */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                
                <h3 className="font-bold text-white mb-8 font-display text-xl">Company Facts</h3>
                <ul className="space-y-6 text-gray-400">
                    <li className="flex justify-between border-b border-white/5 pb-4">
                        <span>Founded</span>
                        <span className="font-mono text-cyan-400">2013</span>
                    </li>
                     <li className="flex justify-between border-b border-white/5 pb-4">
                        <span>Headquarters</span>
                        <span className="font-mono text-white">Fremont, CA</span>
                    </li>
                     <li className="flex justify-between border-b border-white/5 pb-4">
                        <span>Global Reach</span>
                        <span className="font-mono text-white">15+ Countries</span>
                    </li>
                    <li className="flex justify-between pt-2">
                        <span>Type</span>
                        <span className="font-mono text-white">Privately Held</span>
                    </li>
                </ul>
            </div>
         </div>

         {/* Competitive Advantage */}
         <div className="mb-32 relative z-10">
            <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Why We Lead</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Trophy, color: "text-yellow-400", title: "Innovation First", desc: "We solve problems others can't. Our technology operates at a unique layer, enabling compatibility where others fail." },
                    { icon: Users, color: "text-emerald-400", title: "Customer Centric", desc: "We are flexible. We customize solutions for unique requirements and provide direct engineering support." },
                    { icon: MapPin, color: "text-purple-400", title: "Global Standard", desc: "Trusted by Fortune 100 companies in Banking, Insurance, Healthcare, and Government worldwide." }
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-[#0f172a] rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                        <item.icon className={`${item.color} w-10 h-10 mb-6`} />
                        <h3 className="font-bold text-xl text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
         </div>

         {/* Location */}
         <div className="bg-[#050914] border border-white/10 rounded-3xl overflow-hidden relative z-10 flex flex-col md:flex-row">
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
                <div className="uppercase text-cyan-400 font-bold tracking-widest text-xs mb-4">Headquarters</div>
                <h2 className="text-3xl font-bold text-white mb-8 font-display">Visit Us</h2>
                <address className="not-italic text-gray-400 space-y-2 font-mono text-sm">
                    <p className="font-bold text-white text-lg mb-4">Vornex Inc.</p>
                    <p>43575 Mission Blvd. Suite 613</p>
                    <p>Fremont, CA 94539</p>
                    <p>USA</p>
                </address>
                <div className="mt-8 space-y-2 text-sm font-mono">
                    <p className="text-gray-300">Phone: <span className="text-gray-500">1-408-713-1400</span></p>
                    <p className="text-gray-300">Email: <span className="text-gray-500">info@vornexinc.com</span></p>
                </div>
            </div>
            <div className="md:w-1/2 bg-slate-800 relative min-h-[300px]">
               <div className="absolute inset-0 bg-[#0f172a] mix-blend-multiply opacity-80 z-10"></div>
               <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000" alt="Map Location" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                   <div className="w-4 h-4 bg-cyan-500 rounded-full animate-ping absolute"></div>
                   <div className="w-4 h-4 bg-cyan-500 rounded-full relative border-2 border-white"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Company;