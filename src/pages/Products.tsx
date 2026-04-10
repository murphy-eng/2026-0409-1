import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const products = [
  { id: 'cmc', title: 'CMC Development', category: 'Drug Analysis', desc: 'Chemical, Manufacturing, and Control services for global compliance.' },
  { id: 'pk', title: 'PK & Distribution', category: 'Pharmacokinetics', desc: 'Pharmacokinetics and cell distribution studies.' },
  { id: 'pd', title: 'PD & Mechanism', category: 'Pharmacodynamics', desc: 'Pharmacodynamics and action mechanism validation.' },
  { id: 'tox', title: 'Safety Assessment', category: 'Toxicology', desc: 'Toxicology and safety evaluation for preclinical trials.' },
  { id: 'antibody', title: 'Antibody Process', category: 'Bioprocess', desc: 'Antibody and bioprocess development services.' },
  { id: 'instrument', title: 'Advanced Instruments', category: 'Equipment', desc: 'High-end laboratory instrumentation and resources.' }
];

export default function Products() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-[10px] text-white/60">
              <Globe size={12} />
              <span>Language Switcher: Top Right</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Product Center</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive preclinical solutions for the global biotechnology industry.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-48 bg-slate-200 relative">
                  <img src={`https://picsum.photos/seed/${product.id}/800/600`} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {product.desc}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-primary font-bold text-sm flex items-center group-hover:underline"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
