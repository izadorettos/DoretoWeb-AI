import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkNavy/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src="/logo.jpg" alt="Doreto Web & AI Logo" className="w-10 h-10 rounded-lg object-contain" />
                        <span className="text-white font-bold text-xl tracking-tight">Doreto Web & AI</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-200">Início</a>
                            <a href="#sites" className="text-gray-300 hover:text-white transition-colors duration-200">Sites</a>
                            <a href="#automation" className="text-gray-300 hover:text-white transition-colors duration-200">Automação</a>
                            <a href="#footer" className="bg-electricBlue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30">
                                Fale Conosco
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-darkNavy/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Início</a>
                        <a href="#sites" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Sites</a>
                        <a href="#automation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Automação</a>
                        <a href="#footer" className="block px-3 py-2 rounded-md text-base font-medium text-electricBlue hover:text-blue-400">Fale Conosco</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
