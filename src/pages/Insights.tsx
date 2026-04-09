import { motion } from 'motion/react';
import { Calendar, Play, FileText, Download, ArrowRight } from 'lucide-react';

const news = [
  {
    date: '2024-03-15',
    category: '最新消息',
    title: '三華生物科技引進高階外泌體分析系統',
    desc: '為了提供更精確的外泌體鑑定服務，我們正式引進最新一代的奈米粒子追蹤分析儀 (NTA)...'
  },
  {
    date: '2024-02-10',
    category: '科學新知',
    title: '探討外泌體在癌症早期診斷中的潛力',
    desc: '最新的研究顯示，外泌體中所攜帶的特定蛋白質與核酸序列，可作為癌症早期篩檢的重要生物標記...'
  },
  {
    date: '2024-01-20',
    category: '最新消息',
    title: '三華生技參加 2024 國際生技大展',
    desc: '我們將於展覽中展示最新的藥物研發技術平台與客製化服務方案，歡迎各位業界先進蒞臨指導...'
  }
];

export default function Insights() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">最新資訊</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            掌握最新的生技研發趨勢、公司動態與專業技術資源。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: News & Articles */}
            <div className="lg:col-span-2 space-y-12">
              <h2 className="section-title">最新消息與文章</h2>
              <div className="space-y-8">
                {news.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all group"
                  >
                    <div className="md:w-48 h-32 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={`https://picsum.photos/seed/bio${index}/400/300`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center">
                          <Calendar size={14} className="mr-1" /> {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {item.desc}
                      </p>
                      <button className="text-primary font-bold text-sm flex items-center">
                        閱讀更多 <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Video & Resources */}
            <div className="space-y-12">
              {/* Video Section */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Play size={20} className="text-primary mr-2" /> 影音專區
                </h2>
                <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="relative group cursor-pointer">
                      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden">
                        <img
                          src={`https://picsum.photos/seed/video${i}/400/225`}
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                            <Play size={24} className="text-white fill-white" />
                          </div>
                        </div>
                      </div>
                      <h4 className="mt-3 font-bold text-slate-800 text-sm">技術講座：臨床前試驗的關鍵要素</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Download size={20} className="text-primary mr-2" /> 資源下載
                </h2>
                <div className="space-y-4">
                  {[
                    { title: '公司簡介手冊 (PDF)', size: '2.4 MB' },
                    { title: '服務項目清單 2024', size: '1.8 MB' },
                    { title: '外泌體分析技術白皮書', size: '3.5 MB' }
                  ].map((res, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <FileText size={18} className="text-slate-400 group-hover:text-primary" />
                        <div>
                          <p className="text-sm font-bold text-slate-800">{res.title}</p>
                          <p className="text-[10px] text-slate-400">{res.size}</p>
                        </div>
                      </div>
                      <Download size={16} className="text-slate-400 group-hover:text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
