import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Trifecta MedTek</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              三華生物科技致力於提供全方位臨床前試驗服務，是您值得信賴的測試研發夥伴。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">快速連結</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/about" className="hover:text-primary transition-colors">關於我們</a></li>
              <li><a href="/capabilities" className="hover:text-primary transition-colors">核心能量</a></li>
              <li><a href="/products" className="hover:text-primary transition-colors">產品中心</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">服務項目</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">國際業務聯絡窗口</h3>
            <ul className="space-y-4 text-sm">
              <li><span className="text-primary font-bold">北美地區：</span> usa.sales@trifecta-med.com</li>
              <li><span className="text-primary font-bold">歐洲地區：</span> eu.sales@trifecta-med.com</li>
              <li><span className="text-primary font-bold">亞太地區：</span> apac.sales@trifecta-med.com</li>
              <li><span className="text-primary font-bold">大中華區：</span> cn.sales@trifecta-med.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">聯絡資訊</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>新北市汐止區新台五路一段97號16樓之9</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+886 2-26984231 #169</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>trifecta.service@trifecta-med.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 三華生物科技股份有限公司 Trifecta MedTek. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隱私權政策</a>
            <a href="#" className="hover:text-white">使用條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
