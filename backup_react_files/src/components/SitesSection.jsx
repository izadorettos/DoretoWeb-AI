import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Layout, ShoppingBag } from 'lucide-react';

const packages = [
    {
        title: "PACOTE START",
        icon: Rocket,
        price: "R$ 1.200 - R$ 2.500",
        description: "Foco em Landing Pages e Conversão imediata.",
        features: ["Landing Page Alta Conversão", "Design Otimizado para Mobile", "Integração WhatsApp", "SEO Básico", "Hospedagem Inclusa (1 ano)"],
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        title: "PACOTE BUSINESS",
        icon: Layout,
        price: "R$ 2.500 - R$ 5.000",
        description: "Sites institucionais para autoridade.",
        features: ["Até 5 Páginas", "Blog Integrado", "Painel Administrativo", "SEO Avançado", "Formulários Personalizados"],
        highlight: true,
        gradient: "from-blue-600 to-purple-600"
    },
    {
        title: "PACOTE PREMIUM",
        icon: ShoppingBag,
        price: "R$ 5.000+",
        description: "E-commerce e sistemas customizados.",
        features: ["E-commerce Completo", "Área de Membros", "Integração de Pagamentos", "Dashboard Personalizado", "API & Automações"],
        gradient: "from-purple-600 to-pink-500"
    }
];

const SitesSection = () => {
    return (
        <section id="sites" className="py-24 relative overflow-hidden bg-darkNavy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Sites & Landing Pages</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Escolha a solução ideal para a sua presença digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative group rounded-3xl p-1 bg-gradient-to-br ${pkg.gradient} hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="bg-[#0f1115] h-full rounded-[20px] p-8 flex flex-col relative z-10 h-full">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6`}>
                                    <pkg.icon className="text-white w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                                <div className="text-sm text-gray-400 mb-6">{pkg.description}</div>

                                <div className="text-2xl font-bold text-white mb-6">{pkg.price}</div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <Check className="w-5 h-5 text-electricBlue flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium text-white">
                                    Solicitar Agora
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SitesSection;
