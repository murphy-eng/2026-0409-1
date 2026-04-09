import { motion } from 'motion/react';
import { Award, Target, Users, History } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="About Header"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">關於我們</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            三華生物科技致力於建立完整的藥物研發技術平台，提供客戶全方位的專業服務。
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">公司概況</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                三華生物科技建立完整的藥物研發技術平台，從藥物分析、藥理學研究、毒理學評估到抗體藥物生產與製程開發，提供客戶全方位的專業服務。
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                我們擁有專業的技術團隊，核心能力涵蓋小分子藥物、抗體藥物、外泌體及細胞治療產品等多元領域，協助客戶加速產品開發進程。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">經營理念</h4>
                    <p className="text-xs text-slate-500 mt-1">專業、品質、創新</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">核心訴求</h4>
                    <p className="text-xs text-slate-500 mt-1">嚴謹科學技術為核心</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate Overview"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm font-bold text-slate-700 leading-tight">
                    Years of <br /> Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Milestones */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">公司歷程</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>

            <div className="space-y-12">
              {[
                { year: '2024', title: '擴展外泌體鑑定服務', desc: '引進高階外泌體分析技術，提供更全面的生物分析服務。' },
                { year: '2022', title: '獲得品質認證', desc: '實驗室通過相關品質體系認證，確保服務品質符合國際標準。' },
                { year: '2019', title: '建立抗體藥物平台', desc: '成功開發抗體藥物生產與製程開發技術平台。' },
                { year: '2015', title: '公司成立', desc: '三華生物科技正式成立，專注於臨床前試驗服務。' }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0">
                    <div className="w-4 h-4 bg-primary rounded-full z-10 ring-4 ring-white"></div>
                  </div>
                  <div className="flex-1 w-full md:w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certificate */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">品質認證</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ISO 認證', desc: '符合國際標準化組織之品質管理體系。' },
              { title: 'GLP 規範', desc: '遵循優良實驗室操作規範，確保數據完整性。' },
              { title: '專利技術', desc: '擁有多項藥物研發與分析之專利技術。' }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
