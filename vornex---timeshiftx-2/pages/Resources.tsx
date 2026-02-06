import React from 'react';
import { FileText, Download, BookOpen, Video, Search, ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
  const whitePapers = [
    {
      title: "5 Ways to Time Travel Test",
      desc: "Overview of temporal testing importance, five methods for testing date/time functionality, and how to reduce costs.",
      type: "PDF Guide"
    },
    {
      title: "How To Time Shift Microsoft SQL Server",
      desc: "A technical guide on implementing TimeShiftX with SQL Server for temporal testing scenarios.",
      type: "Technical Paper"
    },
    {
      title: "How To Time Shift Oracle Database",
      desc: "Deep dive into Oracle date/time data types and functions, and best practices for TimeShiftX implementation.",
      type: "Technical Paper"
    }
  ];

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
               Knowledge Base
             </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
               Resources Library
             </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
               Technical guides, white papers, and documentation to help you master time travel testing.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
         {/* Grid Lines */}
         <div className="absolute inset-0 pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {/* Main Content - White Papers */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><FileText size={20} /></div>
                Featured White Papers
            </h2>
            
            {whitePapers.map((paper, idx) => (
              <div key={idx} className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold rounded-full mb-4 sm:mb-0">
                        {paper.type}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{paper.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">{paper.desc}</p>
                <button className="flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                  <Download size={16} /> Download PDF
                </button>
              </div>
            ))}
          </div>

          {/* Sidebar Categories */}
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/10">
                <div className="relative mb-6">
                    <input 
                        type="text" 
                        placeholder="Search resources..." 
                        className="w-full bg-[#050914] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
                </div>

                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider opacity-50">Categories</h3>
                <ul className="space-y-2">
                    {[
                        { icon: BookOpen, label: "Technical Guides" },
                        { icon: FileText, label: "Case Studies" },
                        { icon: Video, label: "Video Tutorials" }
                    ].map((cat, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 hover:bg-white/5 p-3 rounded-lg cursor-pointer transition-all">
                            <cat.icon size={16} /> {cat.label}
                        </li>
                    ))}
                </ul>
             </div>
             
             <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
                <h3 className="font-bold text-lg text-white mb-2 relative z-10">Need specifics?</h3>
                <p className="text-blue-200 text-sm mb-6 relative z-10">
                    Our support team can provide detailed integration guides for your specific environment.
                </p>
                <a href="#/contact" className="relative z-10 flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg text-sm font-bold transition-colors">
                    Contact Support <ArrowRight size={16} />
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;