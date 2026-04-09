import { ExternalLink } from 'lucide-react';

const links = [
  { name: '倍思大生技股份有限公司 (Bestat)', url: 'https://www.bestat.com.tw/' },
  { name: '騰達行企業股份有限公司 (UNIMED)', url: 'https://www.unimed.com.tw/' },
  { name: 'Charles River Laboratories', url: 'https://www.criver.com/' },
  { name: 'OmicsBio', url: 'https://www.omicsbio.com/' }
];

export default function Links() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">相關連結</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            合作夥伴與相關產業資源連結。
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <span className="font-bold text-slate-800 group-hover:text-primary transition-colors">{link.name}</span>
                <ExternalLink size={20} className="text-slate-400 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
