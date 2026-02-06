import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Database, Globe, Box, Zap, Lock, CheckCircle2 } from 'lucide-react';

const Product: React.FC = () => {
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
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              Product Tour
            </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              TimeShiftX Overview
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Enterprise-class date simulation software for time travel testing all applications and databases without system clock manipulation.
            </p>
          </div>
        </div>
      </div>

      {/* What is TimeShiftX */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8">The Temporal Testing <br/><span className="text-cyan-400">Paradigm Shift</span></h2>
            <div className="prose prose-lg prose-invert text-gray-400">
              <p className="mb-6">
                Companies today face significant challenges when testing time-sensitive functionality. Changing system clocks requires server isolation, breaks authentication (Kerberos/AD), and corrupts data.
              </p>
              <p className="mb-6">
                <strong className="text-white">TimeShiftX</strong> creates a virtual time environment that wraps around your application or database, intercepting date/time calls and returning the simulated time you specify.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                    "Test year-end processing instantly",
                    "Validate billing cycles & policy expirations",
                    "Simulate leap years and daylight savings",
                    "Zero impact on other users or apps"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-emerald-500" size={20} />
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Abstract Visualization */}
          <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
             
             <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px]">
                <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"></div>
                    <div className="relative w-32 h-32 bg-[#0B101B] rounded-full border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.2)] animate-pulse-glow">
                        <Clock className="w-12 h-12 text-cyan-400" />
                    </div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-[#0f172a] border border-white/20 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <div className="text-2xl font-mono font-bold text-white">Virtual Time</div>
                    <div className="text-cyan-400 font-mono text-sm mt-1">Offset: +1 Year (Future)</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* How it Works Steps */}
      <div className="py-24 bg-[#0B101B] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A seamless interception layer between your application and the operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { step: "01", title: "Install & Configure", desc: "Install TimeShiftX on your OS (physical, virtual, cloud, or container). It sits at the user level, requiring no kernel modifications." },
                { step: "02", title: "Create Virtual Clock", desc: "Define a virtual time container via CLI or GUI. Set the time to the future, past, freeze it, or accelerate it." },
                { step: "03", title: "Run Application", desc: "Execute your app or database inside the container. It sees the simulated time while the system clock remains synced." }
            ].map((item, idx) => (
                <div key={idx} className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors relative group">
                    <div className="text-6xl font-display font-bold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors select-none">
                        {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                        {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 font-display">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {item.desc}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

        <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
                { icon: Clock, title: "No System Clock Changes", desc: "Keep your OS time synced (NTP) while testing future dates." },
                { icon: Lock, title: "AD & Kerberos Safe", desc: "Works seamlessly inside Active Directory without authentication errors." },
                { icon: Zap, title: "No Code Changes", desc: "Zero modification to your application source code required." },
                { icon: Database, title: "Database Compatible", desc: "Supports Oracle, SQL Server, DB2, and more natively." },
                { icon: Box, title: "Container Ready", desc: "Deploy in Docker, Kubernetes, and OpenShift environments." },
                { icon: Globe, title: "Cloud Ready", desc: "Works on AWS, Azure, Google Cloud, and hybrid setups." }
            ].map((item, idx) => (
                <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-cyan-500/30 hover:bg-[#151e32] transition-all group">
                    <div className="flex-shrink-0 text-gray-400 group-hover:text-cyan-400 transition-colors">
                        <item.icon size={28} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Platform Support Strip */}
      <div className="bg-[#050914] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Supported Platforms</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 font-mono text-sm">
            {["Windows", "Linux (RHEL, SUSE, Ubuntu)", "AIX", "Solaris", "HP-UX", "OpenShift", "Docker", "Kubernetes"].map((plat, i) => (
                 <span key={i} className="hover:text-white transition-colors cursor-default">{plat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;