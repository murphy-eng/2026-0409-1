import { useParams } from 'react-router-dom';
import { Globe, CheckCircle, Send } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-4">
            <Globe size={14} />
            <span>Language Switcher: Top Right</span>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span className="text-primary font-bold">{id?.toUpperCase()}</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden mb-8">
                <img src={`https://picsum.photos/seed/${id}/1000/1000`} alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-slate-50 rounded-xl border border-slate-100"></div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{id?.toUpperCase()} Service / Product</h1>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Professional preclinical solution tailored for international biotechnology standards. This service ensures high-quality data and compliance for global market entry.
              </p>

              <div className="space-y-4 mb-12">
                {['Global Compliance', 'Expert Technical Support', 'Rapid Turnaround Time', 'Detailed Analytical Reports'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Inquiry Form */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">International Inquiry Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary outline-none" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Company Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary outline-none" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Country / Region</label>
                      <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary outline-none bg-white" required>
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="China">China</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Japan">Japan</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Quantity / Scale</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary outline-none" placeholder="e.g. 500 units" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Message</label>
                    <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary outline-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#8b0000] transition-colors">
                    <Send size={18} />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
