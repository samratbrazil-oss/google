import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-[#02040a] min-h-screen">

       {/* Hero Section - Standardized Premium Header */}
       <div className="relative pt-48 pb-24 overflow-hidden border-b border-white/5 bg-[#050914]">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         {/* Grid Lines */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
             <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
             <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="opacity-0 animate-fade-in-up [animation-delay:0ms]">
             <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 block">
               Legal
             </span>
           </div>
           <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
               Terms & Conditions
             </h1>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="prose prose-invert prose-lg max-w-none text-gray-400">
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Agreement</h2>
          <p className="mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Intellectual Property</h2>
          <p className="mb-6">
            The Site and its original content, features and functionality are owned by Vornex Inc. and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. License Grant</h2>
          <p className="mb-6">
            Vornex Inc. grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Disclaimer</h2>
          <p className="mb-6">
            The materials on Vornex Inc.'s website are provided "as is". Vornex Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall Vornex Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vornex Inc.'s Internet site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Governing Law</h2>
          <p className="mb-6">
            Any claim relating to Vornex Inc.'s website shall be governed by the laws of the State of California without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;