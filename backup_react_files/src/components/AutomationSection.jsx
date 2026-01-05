import React from 'react';
import { motion } from 'framer-motion';
import { Check, Bot, Zap, Crown } from 'lucide-react';

const bundles = [
    {
        title: "ESSENCIAL",
        setup: "R$ 1.900",
        monthly: "R$ 350",
        description: "1 Automação (Atendimento)",
        features: ["Agente de IA para WhatsApp", "Respostas Instantâneas 24/7", "FAQ Automatizado", "Relatório Mensal"],
        icon: Zap
    },
    {
        title: "BUSINESS",
        setup: "R$ 4.500",
        monthly: "R$ 800",
        description: "Combo Atendimento + Agendamento + CRM",
        features: ["Tudo do Essencial", "Agendamento Automático", "Integração CRM", "Nutrição de Leads", "Dashboard em Tempo Real"],
        highlight: true,
        tag: "MAIS VENDIDO",
        icon: Crown
    },
    {
        title: "ENTERPRISE",
        setup: "Sob Consulta",
        monthly: "Sob Consulta",
        description: "IA Sob medida e leitura de documentos",
        features: ["Multi-agentes", "Leitura de PDF/Docs", "Integrações Customizadas", "Gerente de Conta Dedicado", "SLA Preferencial"],
        icon: Bot
    }
];

const AutomationSection = () => {
    return (
        <section id="automation" className="py-24 relative bg-[#050507]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electricBlue/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Automação com <span className="gradient-text">Inteligência Artificial</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Escale seu atendimento e vendas sem aumentar a equipe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {bundles.map((bundle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative rounded-2xl p-8 border ${bundle.highlight ? 'border-electricBlue bg-[#0f1115] shadow-2xl shadow-blue-900/20 scale-105 z-10' : 'border-white/5 bg-[#0a0a0b] hover:border-white/10'}`}
                        >
                            {bundle.tag && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electricBlue to-neonPurple px-4 py-1 rounded-full text-xs font-bold text-white tracking-wider">
                                    {bundle.tag}
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <div className={`inline-flex p-3 rounded-xl mb-4 ${bundle.highlight ? 'bg-electricBlue/20 text-electricBlue' : 'bg-white/5 text-gray-400'}`}>
                                    <bundle.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{bundle.title}</h3>
                                <p className="text-gray-400 text-sm h-10">{bundle.description}</p>
                            </div>

                            <div className="text-center mb-8 border-b border-white/5 pb-8">
                                <div className="text-3xl font-bold text-white mb-1">
                                    Setup {bundle.setup}
                                </div>
                                <div className="text-electricBlue font-medium">
                                    + {bundle.monthly}/mês
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {bundle.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className={`w-5 h-5 flex-shrink-0 ${bundle.highlight ? 'text-electricBlue' : 'text-gray-500'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-semibold transition-all ${bundle.highlight ? 'bg-electricBlue text-white hover:bg-blue-600 glow-btn' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                Começar Agora
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Simple FAQ */}
                <div className="mt-24 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">Perguntas Frequentes</h3>
                    <div className="space-y-4">
                        <details className="glass p-4 rounded-lg group">
                            <summary className="font-medium text-white cursor-pointer flex items-center justify-between">
                                O que a IA pode fazer pelo meu negócio?
                                <span className="text-electricBlue">+</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                Nossa IA pode automatizar o atendimento ao cliente, agendar reuniões, qualificar leads e até processar documentos, tudo 24/7 sem intervenção humana.
                            </p>
                        </details>
                        <details className="glass p-4 rounded-lg group">
                            <summary className="font-medium text-white cursor-pointer flex items-center justify-between">
                                Preciso de conhecimento técnico?
                                <span className="text-electricBlue">+</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                Não! Nós cuidamos de toda a configuração, treinamento e manutenção da IA. Você recebe tudo pronto para usar.
                            </p>
                        </details>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AutomationSection;
