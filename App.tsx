import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import { Projects } from './components/Projects';
import { AllProjects } from './pages/AllProjects';

import { ScrollToTop } from './components/ScrollToTop';

import { useSEO } from './hooks/useSEO';

function Home() {
  useSEO({
    title: "Matheus Amorim | Marketing Jurídico & Autoridade Digital",
    description: "Especialista em sites e posicionamento no Google para advogados. Conquiste autoridade digital e clientes qualificados com compliance ético da OAB."
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-premium-bg text-white selection:bg-premium-gold/30 selection:text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;