import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Check, XCircle, CheckCircle2 } from 'lucide-react';

const DateShiftSoftware: React.FC = () => {
  return (
    <div className="bg-[#02040a] min-h-screen">
      
      {/* Hero Section - Standardized Premium Header */}
      <div className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         {/* Grid Lines */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-0 animate-fade-in-up [animation-delay:0ms]">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 block">
              The Challenge
            </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Eliminate Environment <br/> Manipulation
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Stop isolating servers and corrupting data just to test a date change.
            </p>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
           <div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl w-fit text-red-400 mb-8"><AlertTriangle size={32} /></div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Traditional Temporal Testing is Broken</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Traditionally, companies struggle with date/time warp testing. They are forced to isolate servers, duplicate environments, and manually manipulate system clocks.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <XCircle className="text-red-500 flex-shrink-0 mt-1 group-hover:text-red-400 transition-colors" size={20} />
                  <span className="text-gray-400 group-hover:text-gray-300"><strong className="text-white">Broken Authentication:</strong> Kerberos and Active Directory fail when clocks are out of sync.</span>
                </li>
                <li className="flex items-start gap-4 group">
                   <XCircle className="text-red-500 flex-shrink-0 mt-1 group-hover:text-red-400 transition-colors" size={20} />
                  <span className="text-gray-400 group-hover:text-gray-300"><strong className="text-white">Data Corruption:</strong> Changing system time can affect file timestamps, logs, and database integrity.</span>
                </li>
                <li className="flex items-start gap-4 group">
                   <XCircle className="text-red-500 flex-shrink-0 mt-1 group-hover:text-red-400 transition-colors" size={20} />
                  <span className="text-gray-400 group-hover:text-gray-300"><strong className="text-white">High Cost:</strong> Maintaining separate isolated environments for time travel is expensive and resource-heavy.</span>
                </li>
              </ul>
           </div>
           
           {/* Comparison Card */}
           <div className="bg-[#0f172a] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <h3 className="font-bold text-white text-xl mb-8 font-display">The Old Way vs. TimeShiftX</h3>
              <div className="space-y-6 relative z-10">
                {/* Bad Way */}
                <div className="bg-[#050914] p-6 rounded-xl border-l-4 border-red-500 relative">
                    <div className="absolute top-4 right-4 opacity-20 text-red-500"><AlertTriangle /></div>
                    <h4 className="font-bold text-red-400 text-xs uppercase tracking-widest mb-2">Manual Clock Change</h4>
                    <p className="text-sm text-gray-400">Requires root access, breaks network auth, affects all apps on server.</p>
                </div>
                 
                 {/* Good Way */}
                 <div className="bg-[#050914] p-6 rounded-xl border-l-4 border-emerald-500 relative shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <div className="absolute top-4 right-4 opacity-20 text-emerald-500"><CheckCircle2 /></div>
                    <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-2">TimeShiftX</h4>
                    <p className="text-sm text-gray-300">Virtual clock per app/user. System clock stays synced. Authentication works.</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="bg-[#0B101B] py-24 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-display font-bold text-white mb-4">The Intelligent Solution</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                TimeShiftX performs temporal testing within your current infrastructure without disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Instant Time Travel", desc: "Shift dates instantly without reboots or delays." },
                 { title: "Cost Savings", desc: "Retire redundant hardware and reduce software license costs for test environments." },
                 { title: "Secure Implementation", desc: "No kernel-level hooks or root access requirements for daily operation." }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-[#0f172a] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all group">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                        <Check size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Integration CTA */}
      <div className="py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-8">Deployment is Simple</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                TimeShiftX is lightweight and can be deployed via automation tools like Ansible, Puppet, or Chef. It integrates into your CI/CD pipeline for automated temporal regression testing.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-[#050914] px-8 py-4 rounded-full font-bold text-base hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                Schedule a Technical Demo
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DateShiftSoftware;