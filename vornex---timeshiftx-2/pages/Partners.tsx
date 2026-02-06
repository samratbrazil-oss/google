import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Users, Globe, Cpu, ArrowRight } from 'lucide-react';

const Partners: React.FC = () => {
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
              Ecosystem
            </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Partner Ecosystem
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver seamless time travel testing solutions across all platforms and services.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         {/* Grid Lines */}
         <div className="absolute inset-0 pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

         <div className="relative z-10">
            {/* Technology Partners */}
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                    <Cpu size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white font-display">Technology Partners</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {[
                    { name: "Oracle", status: "Gold Partner", desc: "Integration with Oracle Database & Cloud Infrastructure." },
                    { name: "Microsoft", status: "Certified Partner", desc: "Full support for Azure, SQL Server, and Windows Server." },
                    { name: "Red Hat", status: "Partner Program", desc: "Certified for Red Hat Enterprise Linux and OpenShift." },
                    { name: "IBM", status: "PartnerWorld", desc: "Compatible with WebSphere, DB2, AIX, and IBM Cloud." },
                    { name: "VMware", status: "Technology Alliance", desc: "Verified for vSphere and vCloud environments." },
                    { name: "SUSE", status: "Partner", desc: "Optimized for SUSE Linux Enterprise Server." }
                ].map((partner, i) => (
                    <div key={i} className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-1 group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{partner.name}</h3>
                        </div>
                        <span className="inline-block px-2 py-1 rounded bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4 border border-white/5">{partner.status}</span>
                        <p className="text-gray-400 text-sm leading-relaxed">{partner.desc}</p>
                    </div>
                ))}
            </div>

            {/* Service & Consulting */}
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                    <Users size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white font-display">Consulting & Service Partners</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                {["Accenture", "Tata Consultancy Services", "Innovation Group", "Anubex"].map((name, i) => (
                    <div key={i} className="bg-[#050914] p-8 rounded-xl border border-white/10 flex items-center justify-center font-bold text-gray-400 hover:text-white hover:border-blue-500/30 transition-all text-center">
                        {name}
                    </div>
                ))}
            </div>

            {/* Resellers */}
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                    <Globe size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white font-display">Resellers</h2>
            </div>
            <div className="flex flex-wrap gap-4 mb-24">
                {["SHI", "World Wide Technology", "Insight", "CDW", "HP"].map((name, i) => (
                    <span key={i} className="px-6 py-3 bg-[#0f172a] border border-white/10 rounded-lg text-gray-300 font-medium hover:bg-white/5 hover:border-emerald-500/30 transition-colors cursor-default">
                        {name}
                    </span>
                ))}
            </div>
         </div>
      </div>

      {/* Join Program CTA */}
      <div className="bg-[#0f172a] border-y border-white/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block p-4 rounded-full bg-white/5 mb-8"><Handshake className="text-white w-8 h-8" /></div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Join our partner program to grow your business, generate new opportunities, and deliver superior QA solutions to your clients.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#050914] px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-colors">
                Apply Now <ArrowRight size={18} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;