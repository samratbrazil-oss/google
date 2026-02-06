import React from 'react';

const Privacy: React.FC = () => {
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
               Privacy Policy
             </h1>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="prose prose-invert prose-lg max-w-none text-gray-400">
          <p className="mb-6 text-sm text-gray-500 font-mono">Last Updated: January 1, 2024</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Introduction</h2>
          <p className="mb-6">
            Vornex Inc. is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Statement of Privacy applies to the Vornex Inc. Web site and governs data collection and usage. By using the Vornex Inc. website, you consent to the data practices described in this statement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Collection of your Personal Information</h2>
          <p className="mb-6">
            Vornex Inc. collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number. Vornex Inc. also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites.
          </p>
          <p className="mb-6">
            There is also information about your computer hardware and software that is automatically collected by Vornex Inc. This information can include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used by Vornex Inc. for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Vornex Inc. Web site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Use of your Personal Information</h2>
          <p className="mb-6">
            Vornex Inc. collects and uses your personal information to operate the Vornex Inc. Web site and deliver the services you have requested. Vornex Inc. also uses your personally identifiable information to inform you of other products or services available from Vornex Inc. and its affiliates.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Security of your Personal Information</h2>
          <p className="mb-6">
            Vornex Inc. secures your personal information from unauthorized access, use or disclosure. Vornex Inc. secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Contact Information</h2>
          <p className="mb-6">
            Vornex Inc. welcomes your comments regarding this Statement of Privacy. If you believe that Vornex Inc. has not adhered to this Statement, please contact Vornex Inc. at info@vornexinc.com. We will use commercially reasonable efforts to promptly determine and remedy the problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;