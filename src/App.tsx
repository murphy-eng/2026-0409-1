import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Links from './pages/Links';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
