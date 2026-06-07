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
import Services from './components/Services';
import TimingsPayments from './components/TimingsPayments';
import TrustSnapshot from './components/TrustSnapshot';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
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
