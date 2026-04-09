import { motion } from 'motion/react';
import { ArrowRight, Beaker, ShieldCheck, Zap, Microscope, Activity, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=2000"
            alt="Science Laboratory Equipment"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
          {/* Digital Overlay Effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              全方位臨床前試驗服務 <br />
              <span className="text-primary">值得信賴的測試研發機構</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              三華生物科技建立完整的藥物研發技術平台，從藥物分析、藥理學研究、毒理學評估到抗體藥物生產與製程開發，提供客戶全方位的專業服務。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-all flex items-center group"
              >
                探索服務項目
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-md font-bold transition-all border border-white/30"
              >
                聯絡我們
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                <Counter to={15} suffix="+" />
              </div>
              <div className="text-sm text-slate-500 font-medium">研發經驗 (年)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                <Counter to={200} suffix="+" />
              </div>
              <div className="text-sm text-slate-500 font-medium">合作客戶</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                <Counter to={500} suffix="+" />
              </div>
              <div className="text-sm text-slate-500 font-medium">完成專案</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                <Counter to={100} suffix="%" />
              </div>
              <div className="text-sm text-slate-500 font-medium">品質保證</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - OmicsBio Style */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Core Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">核心能量</h3>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '藥物品質分析 / CMC',
                desc: '化學與製造管制，確保藥物開發過程中的品質穩定與合規。',
                icon: <Database className="text-primary" size={32} />,
                link: '/capabilities'
              },
              {
                title: '藥物動力學與分布',
                desc: 'PK & Cell Distribution 研究，深入分析藥物在生物體內的代謝與分佈。',
                icon: <Activity className="text-primary" size={32} />,
                link: '/capabilities'
              },
              {
                title: '藥效驗證與作用機轉',
                desc: 'PD & Mechanism of Action，驗證藥物療效並探討其生物學機制。',
                icon: <Microscope className="text-primary" size={32} />,
                link: '/capabilities'
              },
              {
                title: '毒理分析與安全性評估',
                desc: '符合國際法規的毒理學評估，確保產品臨床前的安全性。',
                icon: <ShieldCheck className="text-primary" size={32} />,
                link: '/capabilities'
              },
              {
                title: '抗體藥物生產與製程',
                desc: 'Antibody & Process Development，提供從研發到小量生產的技術支援。',
                icon: <Zap className="text-primary" size={32} />,
                link: '/capabilities'
              },
              {
                title: '設備與資源',
                desc: 'Advanced Instrumentation，配備頂尖實驗儀器，支援各類高階分析。',
                icon: <Beaker className="text-primary" size={32} />,
                link: '/capabilities'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 group hover:shadow-md transition-all"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-lg inline-block group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link to={item.link} className="text-primary font-bold text-sm flex items-center hover:underline">
                  了解更多 <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">準備好開始您的研發專案了嗎？</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            我們的專家團隊隨時準備為您提供專業的諮詢與服務，協助您加速產品開發進程。
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-md font-bold text-lg transition-all inline-block shadow-lg"
          >
            立即聯絡我們
          </Link>
        </div>
      </section>
    </div>
  );
}
