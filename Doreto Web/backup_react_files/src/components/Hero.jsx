import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electricBlue/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neonPurple/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electricBlue/30 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricBlue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-electricBlue"></span>
                    </span>
                    <span className="text-sm text-gray-300 font-medium">Revolução Digital</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                    Elevando seu negócio ao <br />
                    <span className="gradient-text">próximo nível</span> com <br />
                    Web & Inteligência Artificial.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                >
                    Criamos ecossistemas digitais que vendem sozinhos. De Landing Pages de alta conversão a Agentes de IA que atendem seus clientes 24/7.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button className="group relative px-8 py-4 bg-electricBlue rounded-xl font-semibold text-white overflow-hidden glow-btn">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="flex items-center gap-2">
                            Solicitar Orçamento
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="px-8 py-4 glass rounded-xl font-semibold text-white hover:bg-white/5 transition-colors border border-white/10 flex items-center gap-2">
                        Ver Planos
                    </button>
                </motion.div>

                {/* Visual Decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 md:mt-24 relative w-full max-w-4xl"
                >
                    {/* Abstract representational UI or graphic could go here */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">
                        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg">
                                <Globe className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-white">Sites de Alta Performance</h3>
                                <p className="text-sm text-gray-400">Design responsivo e otimizado</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg">
                                <Bot className="w-8 h-8 text-purple-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-white">Automação com IA</h3>
                                <p className="text-sm text-gray-400">Atendimento 24/7 inteligente</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
