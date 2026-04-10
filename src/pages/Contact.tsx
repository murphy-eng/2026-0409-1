import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">聯絡我們</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            如果您對我們的服務有任何疑問或合作需求，歡迎透過以下方式與我們聯繫。
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="section-title">聯絡資訊</h2>
              <p className="text-slate-600 mb-12">
                三華生物科技致力於提供最專業的技術支援。我們的團隊將在收到您的訊息後，儘速由專人與您聯繫。
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">公司地址</h4>
                    <p className="text-slate-600">新北市汐止區新台五路一段97號16樓之9</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">聯絡電話</h4>
                    <p className="text-slate-600">02-26984231 #169</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">電子郵件</h4>
                    <p className="text-slate-600">trifecta.service@trifecta-med.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">服務時間</h4>
                    <p className="text-slate-600">週一至週五 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                  Google Map Placeholder
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Country / Region *</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" required>
                      <option value="">Select Country</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="China">China</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Japan">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+886 2-12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Item *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                    <option>Select Item</option>
                    <option>CMC Development</option>
                    <option>PK & Distribution</option>
                    <option>Safety Assessment</option>
                    <option>Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#8b0000] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
