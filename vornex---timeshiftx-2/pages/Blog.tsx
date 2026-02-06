import React from 'react';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "TimeShiftX 9 for Linux in General Release",
      date: "May 24, 2024",
      category: "Product News",
      excerpt: "We are proud to announce the general availability of TimeShiftX v9 for all Linux distributions. This release brings enhanced container support and performance improvements."
    },
    {
      title: "Best Practices for Temporal Testing in CI/CD",
      date: "April 10, 2024",
      category: "Technical Guide",
      excerpt: "Learn how to automate date shifting within your Jenkins or GitLab pipelines using the TimeShiftX CLI for seamless regression testing."
    },
    {
      title: "Vornex Partners with Major Cloud Provider",
      date: "February 15, 2024",
      category: "Company News",
      excerpt: "New strategic partnership enables one-click deployment of TimeShiftX environments within public cloud infrastructure."
    }
  ];

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
              Latest Updates
            </span>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Vornex Blog
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Latest news, product releases, and technical insights on time travel testing.
            </p>
          </div>
        </div>
      </div>

       <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
         <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-8">
                {posts.map((post, idx) => (
                    <div key={idx} className="bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all group hover:-translate-y-1">
                        <div className="p-8">
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-6">
                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                <span className="flex items-center gap-1.5 text-cyan-400"><Tag size={12} /> {post.category}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors cursor-pointer font-display">{post.title}</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                                {post.excerpt}
                            </p>
                            <button className="text-white font-bold text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group/btn">
                                Read Article <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                 <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/10">
                    <div className="relative mb-6">
                        <input 
                            type="text" 
                            placeholder="Search articles..." 
                            className="w-full bg-[#050914] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
                    </div>

                    <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Product News", "Technical Guides", "Company News", "Best Practices", "Events"].map((tag, i) => (
                            <span key={i} className="bg-white/5 text-gray-400 px-3 py-1.5 rounded-lg text-xs hover:bg-white/10 hover:text-white cursor-pointer transition-colors border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                 </div>

                 <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 p-8 rounded-2xl relative overflow-hidden">
                    <h3 className="font-bold text-white mb-2 relative z-10 font-display text-lg">Subscribe</h3>
                    <p className="text-sm text-gray-400 mb-6 relative z-10">Get the latest temporal testing news delivered to your inbox.</p>
                    <div className="flex flex-col gap-3 relative z-10">
                        <input type="email" placeholder="Email address" className="w-full px-4 py-2 rounded-lg bg-[#050914] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
                        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-cyan-50 transition-colors">Join Newsletter</button>
                    </div>
                 </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default Blog;