import { ToastContainer } from 'react-toastify';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import TechnologySection from './components/home/TechnologySection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechnologySection />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} limit={3} newestOnTop theme="light" />
    </>
  );
}
