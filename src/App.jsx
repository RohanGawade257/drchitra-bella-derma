import { useEffect, useState } from 'react';
import AboutClinic from './components/AboutClinic';
import AboutDoctor from './components/AboutDoctor';
import AppointmentProcess from './components/AppointmentProcess';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import FeaturedTreatments from './components/FeaturedTreatments';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Location from './components/Location';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import PageSkeleton from './components/PageSkeleton';
import Services from './components/Services';
import TimingsPayments from './components/TimingsPayments';
import TrustSnapshot from './components/TrustSnapshot';
import WhyChooseUs from './components/WhyChooseUs';

const knownPaths = new Set(['/', '/index.html']);

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    window.addEventListener('popstate', syncPath);
    return () => window.removeEventListener('popstate', syncPath);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsBooting(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!knownPaths.has(path)) {
    return <NotFound />;
  }

  if (isBooting) {
    return <PageSkeleton />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSnapshot />
        <AboutClinic />
        <AboutDoctor />
        <Services />
        <FeaturedTreatments />
        <WhyChooseUs />
        <AppointmentProcess />
        <Gallery />
        <TimingsPayments />
        <Location />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
