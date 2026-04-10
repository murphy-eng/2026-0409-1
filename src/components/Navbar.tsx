import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { name: '首頁', path: '/' },
  { name: '關於我們', path: '/about' },
  { name: '核心能量', path: '/capabilities' },
  { name: '產品中心', path: '/products' },
  { name: '服務項目', path: '/services' },
  { name: '最新資訊', path: '/insights' },
  { name: '相關連結', path: '/links' },
  { name: '聯絡我們', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">Trifecta MedTek</span>
                <span className="text-xs text-slate-500 font-medium tracking-widest">三華生物科技</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] font-semibold transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-600 hover:text-primary'
                } py-2`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 border-l pl-4 ml-2">
              <button className="text-xs font-bold text-primary hover:underline">繁中</button>
              <span className="text-slate-300">/</span>
              <button className="text-xs font-bold text-slate-400 hover:text-primary hover:underline">EN</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4">
          <div className="px-2 pt-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-primary bg-slate-50'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                } rounded-md`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-3 py-3 text-slate-600">
              <Globe size={18} />
              <span className="text-base font-medium">English</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
