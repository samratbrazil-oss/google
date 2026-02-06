import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Activity, Sun, Moon } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Initialize Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Typing effect for Footer CTA
  const [text, setText] = useState('');
  const fullText = "GET STARTED IN SECONDS";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-cyan-500/30 bg-slate-50 dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Floating Header Island */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:pt-6 pointer-events-none">
        <nav className="w-full max-w-6xl bg-white/80 dark:bg-[#050914]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-2xl dark:shadow-black/50 px-2 py-2 pl-6 pointer-events-auto transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src={isDark ? "https://res.cloudinary.com/dj5kog5gw/image/upload/v1770341107/whitte_1_itqgnj.png" : "https://res.cloudinary.com/dj5kog5gw/image/upload/v1770339891/vornex-Photoroom_2_gscsoi.png"} 
                  alt="Vornex" 
                  className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
               {[
                 { name: 'Product', path: '/product' },
                 { name: 'Solutions', path: '/date-shift-software' },
                 { name: 'Resources', path: '/resources' },
                 { name: 'Partners', path: '/partners' },
                 { name: 'Company', path: '/company' }
               ].map((item) => (
                 <span 
                    key={item.name}
                    className="px-4 py-2 text-sm font-medium rounded-full text-slate-500 dark:text-gray-400 cursor-default opacity-70 hover:opacity-100 transition-opacity"
                 >
                    {item.name}
                 </span>
               ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
               {/* Theme Toggle */}
               <button 
                 onClick={toggleTheme}
                 className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
                 aria-label="Toggle Theme"
               >
                 {isDark ? <Sun size={20} /> : <Moon size={20} />}
               </button>

               {/* Mobile Menu Toggle */}
               <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
                  >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
               </div>

               {/* CTA Button */}
               <NavLink 
                 to="/contact" 
                 className="hidden md:flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-[#050914] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl group"
               >
                 Free Trial
                 <ChevronRight size={14} className="text-slate-400 group-hover:text-white dark:text-gray-400 dark:group-hover:text-black group-hover:translate-x-0.5 transition-all" />
               </NavLink>
            </div>

          </div>
          
          {/* Mobile Dropdown */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100 mt-4 pb-4 border-t border-slate-200 dark:border-white/5' : 'max-h-0 opacity-0'}`}>
             <div className="flex flex-col space-y-1 px-2 pt-2">
               {[
                 { name: 'Product', path: '/product' },
                 { name: 'Solutions', path: '/date-shift-software' },
                 { name: 'Resources', path: '/resources' },
                 { name: 'Partners', path: '/partners' },
                 { name: 'Company', path: '/company' }
               ].map((item) => (
                 <span 
                    key={item.name}
                    className="block px-4 py-3 text-base font-medium rounded-xl text-slate-500 dark:text-gray-400 cursor-default opacity-70"
                 >
                    {item.name}
                 </span>
               ))}
               <div className="pt-4 px-2">
                 <NavLink 
                   to="/contact" 
                   onClick={() => setIsMenuOpen(false)}
                   className="flex items-center justify-center w-full bg-slate-900 text-white dark:bg-white dark:text-[#050914] px-4 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-cyan-50 transition-colors"
                 >
                   Start Free Trial
                 </NavLink>
               </div>
             </div>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
         <Outlet />
      </main>

      {/* Premium Enhanced Footer - Always Dark for Terminal Look */}
      <footer className="bg-[#02040a] pt-40 pb-10 relative overflow-hidden border-t border-white/5 mt-auto">
         
         {/* Extended Grid Lines */}
         <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none px-4 sm:px-6 lg:px-8 z-0">
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-white/5"></div>
            <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-px bg-white/5"></div>
         </div>

         {/* Massive Background Watermark */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none z-0">
            <h1 className="text-[18vw] font-display font-bold leading-none text-white tracking-tighter">VORNEX</h1>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Top Terminal Status Bar */}
            <div className="border-b border-white/5 pb-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded text-xs font-mono text-gray-400 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>Connection: Secure</span>
                 </div>
                 <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/5 to-transparent mx-4"></div>
                 <div className="text-xs font-mono text-gray-500">v9.4.2-stable</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                {/* Interactive Command Center Column */}
                <div className="md:col-span-5 lg:col-span-4 bg-[#0f1521] rounded-2xl p-8 border border-white/10 relative overflow-hidden group">
                    {/* Floating Terminal Text Decoration */}
                    <div className="absolute top-4 right-4 font-mono text-[10px] text-gray-700 select-none pointer-events-none opacity-50">
                        $ npm install time-shift-x<br/>
                        $ start-service
                    </div>
                    
                    <div className="flex items-center gap-3 mb-8">
                         <img 
                           src="https://res.cloudinary.com/dj5kog5gw/image/upload/v1770341107/whitte_1_itqgnj.png" 
                           alt="Vornex" 
                           className="h-7 sm:h-9 w-auto object-contain" 
                         />
                    </div>
                    
                    {/* Typing Headline */}
                    <h3 className="font-mono text-emerald-400 font-bold text-xl mb-4 min-h-[28px]">
                        {text}<span className="animate-pulse">_</span>
                    </h3>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                        Initialize your enterprise temporal testing environment. Zero latency. Full compatibility.
                    </p>
                    
                    <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white text-[#050914] px-6 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-all group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Initialize Setup
                    </Link>
                </div>

                {/* Links Grid */}
                <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                    <div>
                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Product</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/product" className="text-gray-400 hover:text-white transition-colors">Overview</Link></li>
                            <li><Link to="/date-shift-software" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                            <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">API Reference</Link></li>
                            <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">White Papers</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/company" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                            <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom System Status Bar */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="text-sm text-gray-600 font-mono">
                    © {new Date().getFullYear()} Vornex Inc. All rights reserved.
                 </div>
                 
                 {/* System Stats */}
                 <div className="flex items-center gap-6 bg-white/5 rounded-full px-4 py-2 border border-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <Activity size={12} className="text-emerald-400" />
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">CPU: 12%</span>
                    </div>
                    <div className="w-px h-3 bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wide">RAM: 4GB</span>
                    </div>
                    <div className="w-px h-3 bg-white/10"></div>
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wide">US-WEST-1</span>
                    </div>
                 </div>
            </div>

         </div>
      </footer>
    </div>
  );
};

export default Layout;