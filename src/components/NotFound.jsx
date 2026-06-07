import { CalendarCheck, Home, MapPin, MessageCircle } from 'lucide-react';
import { clinic, whatsappUrl } from '../data/clinicData';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <span className="brand-mark not-found-mark">BD</span>
        <span className="eyebrow">{clinic.name}</span>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for may have moved or doesn&apos;t exist.</p>
        <div className="not-found-trust">
          <MapPin size={17} />
          <span>Nerul East, Navi Mumbai · Open all 7 days, 11 AM - 9 PM</span>
        </div>
        <div className="not-found-actions">
          <a className="btn btn-primary" href="/">
            <Home size={18} />
            Go to Home
          </a>
          <a
            className="btn btn-secondary"
            href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I would like to book an appointment.")}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarCheck size={18} />
            Book Appointment
          </a>
          <a className="btn btn-minimal" href={clinic.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Clinic
          </a>
        </div>
      </section>
    </main>
  );
}
