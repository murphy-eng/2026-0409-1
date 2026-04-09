import { motion } from 'motion/react';
import { FlaskConical, TestTube, ShieldAlert, Search, Dna, Settings } from 'lucide-react';

const services = [
  {
    title: '分子與細胞試驗',
    icon: <Dna size={32} />,
    desc: '提供各類細胞功能的評估，包括細胞增殖、凋亡、遷移及訊號傳遞分析。',
    details: ['細胞毒性分析', '基因表現分析', '細胞功能鑑定', '流式細胞分析']
  },
  {
    title: '藥理試驗服務',
    icon: <FlaskConical size={32} />,
    desc: '針對不同疾病領域提供藥效驗證服務，協助客戶篩選具潛力的候選藥物。',
    details: ['腫瘤藥理模型', '免疫調節評估', '代謝疾病模型', '神經藥理研究']
  },
  {
    title: '毒理與安全性評估',
    icon: <ShieldAlert size={32} />,
    desc: '提供符合法規要求的毒理試驗，評估藥物對生物體的潛在風險。',
    details: ['單次劑量毒性', '重複劑量毒性', '安全性藥理', '局部耐受性']
  },
  {
    title: '生物分析與檢測',
    icon: <Search size={32} />,
    desc: '利用高靈敏度分析技術，精確測定生物檢體中的藥物濃度與生物標記。',
    details: ['PK/PD 分析', '免疫原性測試', '生物標記檢測', '方法開發驗證']
  },
  {
    title: '外泌體鑑定服務',
    icon: <TestTube size={32} />,
    desc: '提供完整的外泌體鑑定與分析服務，包括粒徑分佈、表面標記及內容物分析。',
    details: ['NTA 粒徑分析', 'Western Blot 鑑定', '外泌體內容物分析', '功能性驗證']
  },
  {
    title: '其他支援服務',
    icon: <Settings size={32} />,
    desc: '提供客製化的技術支援與諮詢服務，滿足客戶在藥物研發過程中的特殊需求。',
    details: ['技術諮詢', '專案管理', '法規諮詢', '數據分析']
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">服務項目</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            我們提供多元化的專業委託服務，協助您在藥物研發的各個階段取得成功。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-xs text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Service Block - OmicsBio Style */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">客製化委託服務</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  除了標準化的服務項目，我們也提供高度彈性的客製化委託服務。無論是特殊的實驗設計、特定的生物模型開發，或是複雜的數據分析需求，我們的技術團隊都能與您緊密合作，量身打造最合適的解決方案。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <span className="font-bold text-slate-800">需求溝通與評估</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <span className="font-bold text-slate-800">實驗方案設計</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <span className="font-bold text-slate-800">執行與數據交付</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
                  alt="Custom Service"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
