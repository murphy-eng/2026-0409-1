import { motion } from 'motion/react';
import { Microscope, Activity, ShieldCheck, Zap, Beaker, Database } from 'lucide-react';

const capabilities = [
  {
    id: 'cmc',
    title: '藥物品質分析 / 化學與製造管制 (CMC)',
    icon: <Database size={40} />,
    desc: '提供完整的藥物品質分析服務，包括原料藥與製劑的理化特性分析、安定性試驗、不純物鑑定等，確保藥物開發過程中的品質穩定與法規合規。',
    features: ['理化特性分析', '安定性試驗', '不純物鑑定', '方法開發與驗證']
  },
  {
    id: 'pk',
    title: '藥物動力學與分布研究 (PK & Cell Distribution)',
    icon: <Activity size={40} />,
    desc: '深入分析藥物在生物體內的吸收、分布、代謝與排泄 (ADME)，並探討藥物在細胞層級的分布特性。',
    features: ['ADME 研究', '生物利用度評估', '細胞內藥物分布', '代謝產物鑑定']
  },
  {
    id: 'pd',
    title: '藥效驗證與作用機轉 (PD & Mechanism of Action)',
    icon: <Microscope size={40} />,
    desc: '透過多種生物模型驗證藥物療效，並利用分子生物學技術深入探討藥物的作用機制。',
    features: ['藥效評估模型', '作用機轉探討', '生物標記鑑定', '劑量反應研究']
  },
  {
    id: 'tox',
    title: '毒理分析與安全性評估',
    icon: <ShieldCheck size={40} />,
    desc: '提供符合國際法規標準的毒理學評估服務，包括急性、亞慢性毒理試驗及安全性藥理評估。',
    features: ['急性毒理試驗', '安全性藥理評估', '遺傳毒性測試', '局部刺激性試驗']
  },
  {
    id: 'antibody',
    title: '抗體藥物生產與製程開發',
    icon: <Zap size={40} />,
    desc: '提供抗體藥物從研發、細胞株篩選到小量生產的完整技術支援，協助客戶優化生產製程。',
    features: ['細胞株篩選', '培養基優化', '純化製程開發', '抗體特性分析']
  },
  {
    id: 'instrument',
    title: '設備與資源 (Advanced Instrumentation)',
    icon: <Beaker size={40} />,
    desc: '配備頂尖實驗儀器，包括高解析質譜儀、流式細胞儀、高階顯微鏡等，支援各類高階分析需求。',
    features: ['高解析質譜儀', '流式細胞儀', '共軛焦顯微鏡', '自動化分析系統']
  }
];

export default function Capabilities() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">核心能量</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            我們擁有頂尖的技術團隊與先進設備，為您的藥物研發提供最強大的技術後盾。
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
              >
                <div className="lg:w-1/3 bg-slate-900 p-12 flex flex-col items-center justify-center text-white text-center">
                  <div className="mb-6 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                </div>
                <div className="lg:w-2/3 p-12">
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {item.desc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-3 text-slate-700">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
