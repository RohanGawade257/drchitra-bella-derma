import { CalendarCheck, MapPin, MessageCircle, Navigation, Phone, ShieldCheck } from 'lucide-react';
import { clinic, images, trustBadges, whatsappUrl } from '../data/clinicData';
import QuickVisitCard from './QuickVisitCard';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{clinic.tagline}</span>
          <h1>Advanced Skin, Hair, Laser & Aesthetics Clinic in Nerul</h1>
          <p className="hero-lead">
            Personalized skin, hair, laser, slimming and aesthetic treatments at {clinic.name}, helping you
            look confident, healthy and naturally beautiful.
          </p>
          <div className="trust-badges" aria-label="Clinic trust highlights">
            {trustBadges.map((badge) => (
              <span key={badge}>
                <ShieldCheck size={16} />
                {badge}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I would like to book an appointment.")}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </a>
            <a className="btn btn-soft" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a className="btn btn-outline" href={clinic.phoneLink}>
              <Phone size={18} />
              Call Now
            </a>
            <a className="btn btn-ghost" href={clinic.directions}>
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-card hero-image-card">
            <img
              src={images.clinicExterior}
              alt="Readable exterior board and entrance of Dr. Chitra's BellaDerma clinic"
            />
            <div className="image-label top">
              <MapPin size={16} />
              Nerul East, Navi Mumbai
            </div>
            <div className="image-label bottom">Skin | Hair | Laser | Slimming</div>
          </div>
          <div className="floating-hours">Open Today: 11 AM - 9 PM</div>
        </div>

        <QuickVisitCard />
      </div>
    </section>
  );
}
