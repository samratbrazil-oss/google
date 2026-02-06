import React from 'react';
import { Briefcase, Code, Terminal, ChevronRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="bg-[#02040a] min-h-screen">
      
      {/* Hero Section - Standardized Premium Header */}
       <div className="relative pt-48 pb-24 border-b border-white/5 bg-[#050914] overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         {/* Grid Lines */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-0 animate-fade-in-up [animation-delay:0ms]">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 block">
              Careers
            </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Join Our Team
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Help us redefine how the world tests time. We are looking for smart, passionate, and motivated individuals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
            {/* Job Listings */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3 font-display">
                    <span className="w-2 h-8 bg-cyan-500 rounded-full"></span> Open Positions
                </h2>
                
                <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden mb-12 hover:border-cyan-500/30 transition-colors group shadow-2xl">
                    <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-xl text-white font-mono">QA Engineer</h3>
                            <p className="text-xs text-cyan-400 font-mono mt-1">Fremont, CA • Full-time</p>
                        </div>
                        <div className="p-2 bg-white/5 rounded text-gray-400 group-hover:text-cyan-400 transition-colors"><Code size={20} /></div>
                    </div>
                    <div className="p-8 space-y-6 text-sm text-gray-400">
                        <p className="leading-relaxed">
                            We are seeking a lead QA Engineer to drive our functional and systems integration testing. You will work closely with our development team to ensure the reliability of TimeShiftX releases.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <strong className="block text-white mb-3 uppercase text-xs tracking-wider">Responsibilities</strong>
                                <ul className="space-y-2">
                                    {["Create and execute test scripts", "Manual testing UI/CLI", "Identify & document bugs", "Root-cause analysis"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-cyan-500 mt-1">›</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div>
                                <strong className="block text-white mb-3 uppercase text-xs tracking-wider">Requirements</strong>
                                <ul className="space-y-2">
                                    {["2+ years QA experience", "Windows, Linux, UNIX", "Virtualization (VMware)", "CS degree or equivalent"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-cyan-500 mt-1">›</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-[#050914]/50 border-t border-white/5 flex justify-end">
                         <a href="mailto:jobs@vornexinc.com?subject=Application for QA Engineer" className="inline-flex items-center gap-2 bg-white text-black hover:bg-cyan-50 px-6 py-2.5 rounded-lg font-bold transition-colors text-sm">
                            Apply Now <ChevronRight size={16} />
                         </a>
                    </div>
                </div>

                <div className="text-center p-12 bg-[#050914] rounded-2xl border border-dashed border-white/10 hover:border-white/20 transition-colors">
                    <p className="text-gray-400 mb-4">Don't see a perfect fit? We are always looking for talent.</p>
                    <a href="mailto:jobs@vornexinc.com" className="text-cyan-400 font-mono hover:text-white transition-colors">Send us your resume &rarr;</a>
                </div>
            </div>

            {/* Benefits / Culture */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                    <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 shadow-xl">
                        <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2 font-display">
                            <Briefcase size={20} className="text-cyan-400" /> Why Vornex?
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { text: "Work on challenging, low-level systems software.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                                { text: "Small, agile team where your impact is immediate.", color: "text-purple-400", bg: "bg-purple-500/10" },
                                { text: "Competitive compensation and benefits.", color: "text-blue-400", bg: "bg-blue-500/10" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className={`${item.bg} ${item.color} p-1.5 rounded-lg mt-0.5`}><Terminal size={14} /></span>
                                    <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;