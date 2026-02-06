import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Layers, Server, ChevronDown, Terminal as TerminalIcon, 
  Clock, PanelLeft, Wifi, Zap, BarChart3, X, Minus, Square, Lock,
  Cpu, Activity, ArrowRight, Database, Globe, Box, Code, Cloud,
  Phone, Mail
} from 'lucide-react';

// Scroll Reveal Component
interface RevealProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
        ref={ref} 
        style={{ transitionDelay: `${delay}ms` }}
        className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const partnerLogos = [
    "ORACLE", "IBM", "MICROSOFT", "HP", "ACCENTURE", 
    "SAP", "RED HAT", "VMWARE", "SUSE", "AWS", 
    "GOOGLE CLOUD", "CAPGEMINI", "DELOITTE", "WIPRO"
  ];
  
  const dbTags = ["SAP", "Oracle", "SQL Server", "DB2", "PeopleSoft", "Guidewire", "Sybase", "PostgreSQL"];
  const appTags = [".NET", "Java", "WebSphere", "JBoss", "Apache", "Python", "Node.js", "C++", "Tomcat"];
  const middlewareTags = ["ActiveMQ", "Kafka", "RabbitMQ", "Tibco", "WebLogic", "MuleSoft", "BizTalk"];

  // Terminal Logic
  const [terminalLines, setTerminalLines] = useState<Array<{text: string, color: string, time: string}>>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does TimeShiftX do?",
      answer: "TimeShiftX is a date simulation software that lets you time travel your software into the future or past to test all date and time sensitive functionality, such as year-end processing, billing cycles, and policy expirations, without changing the system clock."
    },
    {
      question: "How does it work?",
      answer: "TimeShiftX uses virtual time containers to wrap applications and databases. These containers provide a simulated virtual clock to the application, allowing it to see a different time than the system clock. This requires no code changes and no system clock changes."
    },
    {
       question: "Do I need to isolate my servers?",
       answer: "No. Because TimeShiftX creates virtual time environments for specific users or applications, you can have different applications running on different virtual clocks on the same server simultaneously, without them affecting each other or the OS."
    },
    {
       question: "Is there a trial available?",
       answer: "Yes, we offer a free trial so you can validate the solution in your environment. Please click the 'Start Free Trial' button or contact us to request your trial."
    }
  ];

  const getCurrentTime = () => new Date().toLocaleTimeString('en-US', { hour12: false });

  useEffect(() => {
    const initialLines = [
      { text: "> initializing_timeshiftx_core v9.4.2", color: "text-blue-400", time: getCurrentTime() },
      { text: "> load_module --target=active_directory", color: "text-white", time: getCurrentTime() },
      { text: "[SUCCESS] AD Hooks Injected", color: "text-emerald-400", time: getCurrentTime() },
      { text: "> load_module --target=kerberos", color: "text-white", time: getCurrentTime() },
      { text: "[SUCCESS] Kerberos Ticket Validation Bypassed", color: "text-emerald-400", time: getCurrentTime() },
      { text: "> set_virtual_clock --offset=+5y", color: "text-amber-400", time: getCurrentTime() },
      { text: "[INFO] System Time: " + new Date().toISOString().split('T')[0], color: "text-gray-400", time: getCurrentTime() },
      { text: "[INFO] Virtual Time: 2029-01-01", color: "text-blue-400", time: getCurrentTime() },
    ];
    setTerminalLines(initialLines);

    const interval = setInterval(() => {
      const actions = [
        { text: "Processing batch job ID: " + Math.floor(Math.random() * 999999), color: "text-gray-400" },
        { text: "Validating timestamp...", color: "text-gray-500" },
        { text: "Syncing virtual container...", color: "text-blue-300" },
        { text: "[OK] Transaction verified in future state", color: "text-emerald-400" },
        { text: "Checking orbital sync...", color: "text-gray-500" },
        { text: "Intercepting GetSystemTime() call", color: "text-purple-300" },
        { text: "Rewriting packet header...", color: "text-gray-400" },
        { text: "Bypassing SSL date check...", color: "text-amber-200" },
        { text: "Simulating Leap Year logic...", color: "text-white" },
        { text: "Database connection maintained (Pool: 24/50)", color: "text-indigo-300" },
        { text: "LDAP Authentication: OK", color: "text-emerald-400" },
      ];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      setTerminalLines(prev => {
        const newLines = [...prev, { ...randomAction, time: getCurrentTime() }];
        if (newLines.length > 50) return newLines.slice(1); // Keep history manageable
        return newLines;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll only if not hovering
  useEffect(() => {
    if (scrollRef.current && !isHovering) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [terminalLines, isHovering]);

  return (
    <div className="bg-slate-50 dark:bg-white transition-colors duration-300">
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        @keyframes infinite-scroll-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-scroll-reverse {
          animation: infinite-scroll-reverse 30s linear infinite;
        }
        .group:hover .animate-infinite-scroll,
        .group:hover .animate-infinite-scroll-reverse {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-aurora {
          background-size: 200% 200%;
          animation: aurora 10s ease infinite;
        }
        @keyframes data-flow {
          0% { left: 15%; opacity: 0; width: 10%; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 75%; opacity: 0; width: 10%; }
        }
        .animate-data-flow {
          animation: data-flow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-glow {
           0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.2); }
           50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.5); }
        }
        .animate-pulse-glow {
           animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
           animation: bounce-slow 6s ease-in-out infinite;
        }
        @keyframes beam {
          0% { left: 0; width: 0; opacity: 0; }
          10% { opacity: 1; }
          50% { width: 100px; }
          90% { opacity: 1; }
          100% { left: 100%; width: 0; opacity: 0; }
        }
        .animate-beam {
          animation: beam 3s linear infinite;
        }
        @keyframes scan-vertical {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan-vertical {
            animation: scan-vertical 4s linear infinite;
        }
        @keyframes ripple {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(2); opacity: 0; }
        }
        .animate-ripple {
            animation: ripple 2s ease-out infinite;
        }
        @keyframes tracer {
            0% { left: 10%; opacity: 0; width: 10px; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 90%; opacity: 0; width: 10px; }
        }
        .animate-tracer {
            animation: tracer 2.5s ease-in-out infinite;
        }
        @keyframes grow-line {
            0% { width: 0%; }
            100% { width: 100%; }
        }
        .animate-grow-line {
            animation: grow-line 1.5s ease-out forwards;
        }
      `}</style>

      {/* Hero Section - Cryptix Style / Center Aligned */}
      <div className="relative bg-slate-50 dark:bg-[#02040a] overflow-hidden pt-32 pb-40 border-b border-slate-200 dark:border-white/5">
        
        {/* Background Grid / Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-20 mix-blend-soft-light"></div>

        {/* Structural Grid Lines - Dynamic Frame */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-0 px-4 sm:px-6 lg:px-8">
            {/* Left Vertical Line */}
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-white/5 to-transparent"></div>
            {/* Right Vertical Line */}
            <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-white/5 to-transparent"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
            
            {/* Badge with Lines */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-10 w-full max-w-2xl">
                <div className="h-px flex-1 bg-gradient-to-l from-slate-300 dark:from-white/10 to-transparent"></div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg dark:shadow-black/20 transition-transform hover:scale-105 cursor-default shrink-0">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span>Enterprise Grade Testing</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-white/10 to-transparent"></div>
            </div>

            {/* Headline */}
            <Reveal>
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-[1] tracking-tight max-w-5xl">
                Take Control of <br/>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/60 pb-2">Your Software Time</span>
                </h1>
            </Reveal>

            {/* Subheadline */}
            <Reveal delay={100}>
                <p className="font-sans text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
                Safely travel your applications into the future or past. Validate year-end, leap year, and billing logic instantly without server isolation.
                </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={200}>
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto z-20 relative">
                <Link to="/contact" className="group relative bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-cyan-50 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                    Start Free Trial
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/product" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white px-6 py-4 font-medium text-base transition-colors flex items-center gap-2 hover:gap-3">
                    See how it works
                    <ArrowRight size={16} />
                </Link>
                </div>
            </Reveal>
            
            {/* Central Terminal / Dashboard Visual */}
            <div className="relative w-full max-w-5xl mx-auto perspective-1000 group mt-20">
                
                {/* GLOW EFFECT */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen animate-pulse opacity-50"></div>

                {/* Floating Decor Elements */}
                <div className="absolute -left-12 top-1/3 z-30 hidden xl:block animate-bounce-slow">
                    <div className="bg-white/90 dark:bg-[#0f1521]/90 border border-slate-200 dark:border-white/10 p-4 rounded-xl backdrop-blur-md shadow-2xl">
                        <Wifi className="text-emerald-500 dark:text-emerald-400 w-6 h-6 mb-2" />
                        <div className="text-xs text-slate-500 dark:text-gray-400 font-bold uppercase">Latency</div>
                        <div className="text-lg font-mono text-slate-900 dark:text-white">12ms</div>
                    </div>
                </div>
                <div className="absolute -right-8 top-1/4 z-30 hidden xl:block animate-bounce-slow delay-700">
                    <div className="bg-white/90 dark:bg-[#0f1521]/90 border border-slate-200 dark:border-white/10 p-4 rounded-xl backdrop-blur-md shadow-2xl">
                        <Shield className="text-cyan-500 dark:text-cyan-400 w-6 h-6 mb-2" />
                        <div className="text-xs text-slate-500 dark:text-gray-400 font-bold uppercase">Security</div>
                        <div className="text-lg font-mono text-slate-900 dark:text-white">Active</div>
                    </div>
                </div>

                {/* Main Terminal Container - Always Dark Theme for Console */}
                <div className="relative z-10 rounded-xl bg-[#0B101B] border border-slate-200 dark:border-white/10 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 overflow-hidden text-left transform transition-transform duration-700 hover:scale-[1.01] hover:-translate-y-1">
                     
                     {/* Top Edge Highlight Line */}
                     <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-20"></div>

                     {/* Terminal Header */}
                     <div className="bg-[#151b2b] border-b border-white/5 p-4 flex items-center justify-between select-none">
                        <div className="flex items-center gap-4">
                             <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                            <button 
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className={`p-1 rounded hover:bg-white/10 transition-colors ${isSidebarOpen ? 'text-cyan-400' : 'text-gray-500'}`}
                            >
                                <PanelLeft size={14} />
                            </button>
                        </div>
                        <div className="text-xs text-gray-500 font-mono flex items-center gap-2 opacity-50">
                            <TerminalIcon size={12} />
                            <span>root@vornex-node-01</span>
                        </div>
                     </div>

                     {/* Terminal Body */}
                     <div className="flex flex-col sm:flex-row h-[450px] bg-[#0B101B] relative">
                        {/* Sidebar */}
                        <div className={`${isSidebarOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'} hidden sm:flex flex-col border-r border-white/5 bg-[#0f1521]/50 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}>
                            <div className="p-4 space-y-6">
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-wider">Environment</div>
                                    <div className="flex items-center gap-2 text-xs text-white font-medium bg-white/5 p-2 rounded border border-white/5">
                                        <Server size={12} className="text-cyan-400" /> Production
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-wider">Virtual Time</div>
                                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded">
                                        <div className="text-cyan-400 font-mono font-bold text-sm">2029-01-01</div>
                                        <div className="text-[10px] text-cyan-300/70 mt-1">+5 Years Offset</div>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-wider">Resources</div>
                                    <div className="space-y-2">
                                        <div className="w-full bg-gray-800 rounded-full h-1">
                                            <div className="bg-emerald-500 h-1 rounded-full w-[45%]"></div>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-1">
                                            <div className="bg-purple-500 h-1 rounded-full w-[70%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logs */}
                        <div className="flex-1 p-6 font-mono text-xs overflow-hidden flex flex-col relative"
                             onMouseEnter={() => setIsHovering(true)}
                             onMouseLeave={() => setIsHovering(false)}>
                             <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar space-y-2 pb-8">
                                {terminalLines.map((line, i) => (
                                    <div key={i} className={`${line.color} flex gap-4 items-baseline opacity-90 hover:opacity-100 transition-opacity`}>
                                        <span className="opacity-30 select-none w-16 text-right text-[10px]">{line.time}</span>
                                        <span>{line.text}</span>
                                    </div>
                                ))}
                                <div className="flex gap-4 items-baseline mt-2">
                                    <span className="w-16"></span>
                                    <span className="w-2 h-4 bg-cyan-500/50 animate-pulse block"></span>
                                </div>
                             </div>
                             {/* Status Bar */}
                             <div className="absolute bottom-0 left-0 right-0 bg-[#0f1521] border-t border-white/5 px-4 py-2 flex justify-between items-center text-[10px] text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${isHovering ? 'bg-yellow-500' : 'bg-emerald-500'} transition-colors`}></div>
                                    <span className="font-semibold tracking-wider">{isHovering ? 'PAUSED' : 'RUNNING'}</span>
                                </div>
                                <span>VORNEX CORE v9.4</span>
                            </div>
                        </div>
                     </div>
                </div>
                
                {/* Reflection Gradient under terminal */}
                <div className="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-cyan-500/10 to-transparent blur-xl opacity-50 z-0"></div>
            </div>

            {/* Trust Indicators */}
            <Reveal className="mt-24 w-full opacity-60 hover:opacity-100 transition-opacity duration-500 relative z-10">
                <div className="flex items-center justify-center mb-8 w-full max-w-4xl mx-auto">
                     <p className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-[0.3em] font-bold shrink-0">Trusted by Industry Leaders</p>
                </div>
                
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center [&_li]:mx-12 animate-infinite-scroll">
                        {partnerLogos.map((logo, index) => (
                            <li key={index} className="text-lg font-display font-bold text-slate-900/30 dark:text-white/30 whitespace-nowrap">{logo}</li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center [&_li]:mx-12 animate-infinite-scroll" aria-hidden="true">
                        {partnerLogos.map((logo, index) => (
                            <li key={index} className="text-lg font-display font-bold text-slate-900/30 dark:text-white/30 whitespace-nowrap">{logo}</li>
                        ))}
                    </ul>
                </div>
            </Reveal>

        </div>
      </div>

      {/* Bento Grid Features Section */}
      <div className="pt-0 pb-40 bg-slate-50 dark:bg-[#02040a] relative">
        
         {/* Extended Grid Lines from Hero */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 dark:from-white/5 to-transparent"></div>
            <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 dark:from-white/5 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Why Choose TimeShiftX?</h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">The complete solution for enterprise date and time simulation.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* 1. Active Directory (Featured Large Card) */}
            <Reveal delay={0} className="md:col-span-2 bg-white dark:bg-[#0f172a] rounded-3xl p-8 text-slate-900 dark:text-white relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl group flex flex-col hover:border-blue-500/30 hover:scale-[1.01] transition-all duration-300 hover:shadow-blue-900/10 min-h-[400px]">
               {/* Animated Background Graph */}
               <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none z-0">
                   {/* Tech Grid Animation */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
               </div>

               {/* Status Protocol Floating Pill */}
               <div className="absolute top-6 right-6 sm:top-auto sm:bottom-6 sm:right-6 z-20">
                    <div className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full backdrop-blur text-[10px] text-slate-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        PROTOCOL: KERBEROS
                    </div>
               </div>

               <div className="relative z-10 mb-6 flex flex-col">
                   {/* Horizontal Header Layout */}
                   <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Shield size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Active Directory Compatible</h3>
                   </div>
                    <p className="text-slate-600 dark:text-gray-400 max-w-md">
                       Safely run forward/back date testing inside Active Directory, Kerberos, and LDAP without code changes or errors.
                   </p>
               </div>

               {/* Animated Diagram */}
               <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-white/5 p-0 relative flex items-center justify-center overflow-hidden min-h-[220px] group-hover:border-slate-300 dark:group-hover:border-white/10 transition-colors">
                    
                    {/* Connection Track */}
                    <div className="absolute top-1/2 left-[15%] right-[15%] h-[1px] border-t border-dashed border-slate-300 dark:border-white/20 z-0 -translate-y-1/2"></div>

                    {/* Tracer Packet */}
                    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
                        <div className="relative w-full h-2">
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[15%] h-[3px] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent rounded-full animate-tracer shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
                        </div>
                    </div>

                    {/* Nodes Container */}
                    <div className="flex items-center justify-between w-full max-w-[80%] relative z-10">
                        
                        {/* Node 1: On-Prem */}
                        <div className="relative group/node flex flex-col items-center justify-center">
                            <span className="absolute bottom-full mb-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">On-Premises</span>
                            
                            <div className="absolute -bottom-2 left-2 right-2 h-2 bg-slate-300 dark:bg-slate-800 rounded-b-md border-x border-b border-slate-200 dark:border-slate-700 z-0"></div>
                            <div className="absolute -bottom-4 left-3 right-3 h-2 bg-slate-400 dark:bg-slate-900 rounded-b-md border-x border-b border-slate-300 dark:border-slate-800 z-0"></div>

                            <div className="w-20 h-20 bg-white dark:bg-[#0B101B] rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xl dark:shadow-2xl relative z-10 transition-transform group-hover/node:-translate-y-1">
                                <div className="bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl relative">
                                    <Server className="text-slate-500 dark:text-slate-300" size={32} />
                                    <div className="absolute inset-0 rounded-xl border-2 border-cyan-500/50 opacity-0 animate-ripple"></div>
                                </div>
                                <div className="absolute top-3 right-2 flex flex-col gap-1">
                                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                                </div>
                            </div>
                        </div>

                        {/* Center Badge */}
                        <div className="relative animate-pulse-glow z-20">
                            <div className="bg-white dark:bg-[#0f172a] border border-emerald-500/50 px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg dark:shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-md">
                                <Lock size={14} className="text-emerald-500 dark:text-emerald-400" />
                                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide">AUTH SECURE</span>
                            </div>
                        </div>

                        {/* Node 2: Azure AD */}
                        <div className="relative group/node flex flex-col items-center justify-center">
                            <span className="absolute bottom-full mb-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">Azure AD</span>
                            <div className="absolute inset-[-8px] rounded-full border border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite] z-0"></div>
                            
                            <div className="w-20 h-20 bg-white dark:bg-[#0B101B] rounded-2xl border border-blue-200 dark:border-blue-900/30 flex items-center justify-center shadow-xl dark:shadow-2xl relative z-10 transition-transform group-hover/node:-translate-y-1">
                                 <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl relative">
                                    <svg className="w-8 h-8 text-[#0078D4]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.5,23L1.6,7.3h8.2l9.2,15.7H11.5z M13.4,18.6L22.4,2.7h-6.7l-5.9,10.4L13.4,18.6z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-xl border-2 border-blue-500/50 opacity-0 animate-ripple" style={{animationDelay: '1.25s'}}></div>
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0B101B]"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </Reveal>

            {/* 2. Total Software Compatibility */}
            <Reveal delay={150} className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col">
               <div className="p-8 pb-0 relative z-20">
                   <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                      <Layers size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">Total Compatibility</h3>
                   <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
                     Works with all apps & databases.
                   </p>
               </div>

               {/* Compatibility Matrix Tray */}
               <div className="flex-1 bg-slate-100/50 dark:bg-[#050914]/30 border-t border-slate-200 dark:border-white/5 py-6 relative flex flex-col justify-center">
                   {/* Fade Mask */}
                   <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div className="flex gap-3 animate-infinite-scroll w-max">
                            {[...dbTags, ...dbTags].map((tag, i) => (
                                <div key={i} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 dark:bg-indigo-500/5 dark:border-indigo-500/20 text-slate-600 dark:text-indigo-300 text-xs font-semibold whitespace-nowrap cursor-text select-text transition-colors hover:bg-black hover:border-white/40 hover:text-white">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 animate-infinite-scroll-reverse w-max">
                            {[...appTags, ...appTags].map((tag, i) => (
                                <div key={i} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 dark:bg-blue-500/5 dark:border-blue-500/20 text-slate-600 dark:text-blue-300 text-xs font-semibold whitespace-nowrap cursor-text select-text transition-colors hover:bg-black hover:border-white/40 hover:text-white">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 animate-infinite-scroll w-max">
                            {[...middlewareTags, ...middlewareTags].map((tag, i) => (
                                <div key={i} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 dark:bg-purple-500/5 dark:border-purple-500/20 text-slate-600 dark:text-purple-300 text-xs font-semibold whitespace-nowrap cursor-text select-text transition-colors hover:bg-black hover:border-white/40 hover:text-white">
                                    {tag}
                                </div>
                            ))}
                        </div>
                   </div>
               </div>
            </Reveal>

            {/* 3. No Code Changes */}
            <Reveal delay={300} className="md:col-span-2 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col group overflow-hidden">
               <div className="p-8 pb-2">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                        <Code size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">No Code Changes</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm max-w-md">
                        Zero modification to your application source code required. TimeShiftX sits at the user level, intercepting calls dynamically.
                    </p>
               </div>

               {/* Visual - Terminal stays dark theme for contrast */}
               <div className="flex-1 bg-[#0B101B] mx-6 mb-6 mt-2 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="bg-[#151b2b] border-b border-white/5 px-4 py-3 flex items-center gap-4 select-none">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                    </div>

                    <div className="p-6 font-mono text-xs md:text-sm leading-relaxed relative">
                        <div className="flex gap-4">
                            <div className="flex flex-col text-right text-gray-600 select-none text-[10px] pt-[2px] space-y-1">
                                <span>42</span>
                                <span>43</span>
                                <span>44</span>
                                <span>45</span>
                                <span>46</span>
                            </div>
                            <div className="flex-1 text-gray-300 relative z-10 space-y-1">
                                <div>
                                    <span className="text-purple-400">public</span> <span className="text-blue-400">long</span> <span className="text-yellow-200">getCurrentTime</span>() {'{'}
                                </div>
                                <div className="pl-4">
                                     <div className="text-gray-300">
                                         <span className="text-pink-400">return</span> System.currentTimeMillis();
                                     </div>
                                </div>
                                <div>{'}'}</div>
                                
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <div className="text-[10px] text-gray-500 mb-1">Console Output:</div>
                                    <div className="text-emerald-400 font-bold flex items-center gap-2">
                                        <span className="text-gray-600">></span>
                                        <span className="animate-pulse">2029-01-01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
               </div>
            </Reveal>

            {/* 4. Multi-Platform */}
            <Reveal delay={450} className="bg-white dark:bg-[#0f172a] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-purple-500/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group overflow-hidden relative">
               <div className="relative z-20">
                   <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                      <Server size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">Multi-Platform</h3>
                   <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
                      Seamless integration with Windows, Linux, Red Hat, SUSE, AIX, Solaris, and HP-UX.
                   </p>
                   
                   {/* Platform Modules */}
                   <div className="relative space-y-2 overflow-hidden rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#050914] p-4">
                        {/* Scanning Beam */}
                        <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent border-y border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] animate-scan-vertical pointer-events-none z-10"></div>

                        {[
                            { name: "Windows Server 2022", arch: "x64", status: "Verified" },
                            { name: "RHEL 9.0 / CentOS", arch: "arm64", status: "Verified" },
                            { name: "IBM AIX 7.3", arch: "ppc64", status: "Verified" },
                            { name: "Solaris 11.4", arch: "sparc", status: "Verified" }
                        ].map((platform, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs group/item transition-colors duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-gray-600 group-hover/item:bg-emerald-500 transition-colors duration-1000 delay-[calc(var(--delay)*100ms)]"></div>
                                    <span className="text-slate-700 dark:text-gray-300 font-mono">{platform.name}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-slate-500 dark:text-gray-500 font-mono">{platform.arch}</span>
                                </div>
                            </div>
                        ))}
                   </div>
               </div>
            </Reveal>

            {/* 5. Cloud & Containers */}
            <Reveal delay={600} className="md:col-span-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-3xl p-8 text-slate-900 dark:text-white border border-blue-200 dark:border-blue-500/20 shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 pointer-events-none">
                    <Cloud size={200} />
                </div>
                
                <div className="relative z-10 max-w-lg">
                    <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 dark:text-blue-400 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                        <Cloud size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">Cloud & Container Ready</h3>
                    <p className="text-slate-600 dark:text-blue-100 text-sm leading-relaxed">
                        Native support for Docker, Kubernetes, OpenShift, AWS, Azure, and GCP environments. Deploy anywhere with confidence.
                    </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3 justify-center md:justify-end max-w-md">
                    {["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "OpenShift"].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-white dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider hover:bg-blue-50 dark:hover:bg-blue-500/20 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* FAQ Section - Light/Dark Supported */}
      <div className="pt-40 pb-40 bg-slate-50 dark:bg-[#02040a] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
        
        {/* FAQ Background Grid Lines */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/5"></div>
            <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
                {/* Left Column */}
                <Reveal className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-24 h-fit mb-12 lg:mb-0">
                    <div className="absolute -top-20 -left-20 text-[200px] font-bold text-slate-200 dark:text-white/5 pointer-events-none select-none leading-none z-0 hidden lg:block font-display">
                    FAQ
                    </div>

                    <div className="relative z-10">
                        <span className="text-cyan-500 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2 block">Support</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Questions & <br/> Answers</h2>
                        <p className="text-slate-600 dark:text-gray-400 text-lg mb-8">
                            Have more questions? Don't hesitate to contact us directly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-slate-900 dark:text-white font-semibold group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">1-408-713-1400</div>
                                    <div className="text-slate-500 dark:text-gray-500 text-sm">Mon-Fri 9am-6pm PST</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-slate-900 dark:text-white font-semibold group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">info@vornexinc.com</div>
                                    <div className="text-slate-500 dark:text-gray-500 text-sm">Support & Sales</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Right Column */}
                <div className="lg:col-span-7 space-y-4">
                    {faqs.map((faq, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div 
                                className={`bg-white dark:bg-[#0f172a] border ${openFaqIndex === index ? 'border-cyan-500/50 shadow-lg dark:shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-slate-200 dark:border-white/5'} rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-slate-300 dark:hover:border-white/10`}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            >
                                <div className="p-6 flex gap-6 items-start">
                                    <span className={`text-xl font-mono font-bold pt-1 ${openFaqIndex === index ? 'text-cyan-500 dark:text-cyan-400' : 'text-slate-400 dark:text-gray-600'}`}>
                                        0{index + 1}
                                    </span>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className={`text-lg font-semibold font-display ${openFaqIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-gray-300'} pr-8 transition-colors`}>{faq.question}</h3>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaqIndex === index ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-500 dark:text-cyan-400' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-500'}`}>
                                                <ChevronDown size={16} className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden">
                                                <p className="text-slate-600 dark:text-gray-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;