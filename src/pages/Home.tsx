import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, Zap, Microscope, Activity, Database, Award, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=2000"
            alt="Global Biotechnology"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold mb-6 border border-primary/30">
              <Globe size={14} />
              <span>Global Clinical Trial Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Leading the Future of <br />
              <span className="text-primary">Biotechnology</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Trifecta MedTek provides comprehensive preclinical trial services, establishing a complete drug R&D technology platform for global partners.
              <br />
              <span className="text-sm mt-2 block text-slate-400">三華生物科技為全球合作夥伴提供全方位的臨床前試驗服務，建立完整的藥物研發技術平台。</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-primary hover:bg-[#8b0000] text-white px-8 py-4 rounded-md font-bold transition-all flex items-center group"
              >
                View Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-md font-bold transition-all border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Service Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Global Service Network</h2>
            <p className="text-slate-500">全球服務範圍：已進入市場標示</p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="relative aspect-[21/9] bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 grayscale">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" alt="World Map" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
              <div className="flex justify-center space-x-12 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping mb-2"></div>
                  <span className="text-xs font-bold text-slate-800">North America [可多語系切換]</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping mb-2"></div>
                  <span className="text-xs font-bold text-slate-800">Europe [可多語系切換]</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping mb-2"></div>
                  <span className="text-xs font-bold text-slate-800">Asia Pacific [可多語系切換]</span>
                </div>
              </div>
              <p className="text-slate-400 font-mono text-sm">[World Map Placeholder Area]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Advantages */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: 'Quality Assurance', desc: 'International standards compliance.' },
              { icon: <Zap size={32} />, title: 'Rapid Response', desc: 'Accelerated R&D timelines.' },
              { icon: <Microscope size={32} />, title: 'Advanced Tech', desc: 'Cutting-edge lab equipment.' },
              { icon: <Users size={32} />, title: 'Expert Team', desc: 'Ph.D. led research groups.' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Product Categories</h2>
            <p className="text-slate-500">產品分類：卡片式 (6大類)</p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'CMC Development', desc: 'Chemical, Manufacturing, and Control.', icon: <Database /> },
              { title: 'PK & Distribution', desc: 'Pharmacokinetics and cell distribution.', icon: <Activity /> },
              { title: 'PD & Mechanism', desc: 'Pharmacodynamics and action mechanism.', icon: <Microscope /> },
              { title: 'Safety Assessment', desc: 'Toxicology and safety evaluation.', icon: <ShieldCheck /> },
              { title: 'Antibody Process', desc: 'Antibody and process development.', icon: <Zap /> },
              { title: 'Advanced Instruments', desc: 'High-end laboratory instrumentation.', icon: <Beaker /> }
            ].map((item, index) => (
              <Link key={index} to="/products" className="group relative h-64 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-primary/60 transition-colors z-10"></div>
                <img src={`https://picsum.photos/seed/bio${index}/800/600`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* International Certifications */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">International Certifications</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['ISO 9001', 'GLP', 'ISO 17025', 'FDA Compliant', 'CE Mark'].map((cert, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-200 rounded-lg flex items-center justify-center font-bold text-slate-400 text-[10px] text-center px-2">
                  {cert}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Global Partners</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-20 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 font-bold text-xs">
                Partner Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Accelerate Your Global R&D Journey</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Trifecta MedTek for world-class preclinical trial services.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-md font-bold text-lg transition-all inline-block shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function Beaker() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>;
}
