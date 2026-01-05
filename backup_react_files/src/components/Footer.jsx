import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#020203] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="Doreto Web & AI Logo" className="w-10 h-10 rounded-lg object-contain" />
                            <span className="text-white font-bold text-xl tracking-tight">Doreto Web & AI</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Transformando negócios através da tecnologia. Landing Pages de alta performance e Agentes de IA que trabalham por você.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-4">
                            <li><a href="#hero" className="text-gray-400 hover:text-electricBlue transition-colors">Início</a></li>
                            <li><a href="#sites" className="text-gray-400 hover:text-electricBlue transition-colors">Sites</a></li>
                            <li><a href="#automation" className="text-gray-400 hover:text-electricBlue transition-colors">Automação</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-electricBlue transition-colors">
                                    <MessageCircle size={18} />
                                    <span>WhatsApp</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-electricBlue transition-colors">
                                    <Instagram size={18} />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-electricBlue transition-colors">
                                    <Mail size={18} />
                                    <span>Email</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Doreto Web & AI. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
