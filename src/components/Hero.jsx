import { CalendarCheck, Clock3, MapPin, MessageCircle, Navigation, Phone, ShieldCheck } from 'lucide-react';
import { clinic, images, trustBadges, whatsappUrl } from '../data/clinicData';

export default function Hero() {
  return (
    <section className="hero-concierge" id="home">
      <div className="container hero-concierge-grid">
        <div className="hero-panel">
          <span className="eyebrow">{clinic.tagline}</span>
          <h1>Trusted skin, hair and laser care in Nerul East.</h1>
          <p>
            A calm, consultation-led clinic experience for patients looking for dermatology, aesthetics,
            slimming, wellness and hair care support at {clinic.name}.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I would like to book an appointment.")}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </a>
            <a className="btn btn-secondary" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp Clinic
            </a>
            <a className="btn btn-minimal" href={clinic.directions}>
              <Navigation size={18} />
              Get Directions
            </a>
          </div>

          <div className="hero-callout">
            <a className="btn btn-outline" href={clinic.phoneLink}>
              <Phone size={18} />
              Call {clinic.phone}
            </a>
            <span>Open all 7 days, 11 AM - 9 PM</span>
          </div>
        </div>

        <div className="hero-editorial" aria-label="Clinic identity and trust images">
          <div className="hero-image-main">
            <img
              src={images.clinicExterior}
              alt="Readable exterior board and entrance of Dr. Chitra's BellaDerma clinic"
            />
          </div>
          <div className="hero-image-small">
            <img src={images.doctorCabin} alt="Doctor sitting inside BellaDerma clinic cabin" />
          </div>
          <div className="hero-status-card">
            <Clock3 size={18} />
            <div>
              <strong>Open Today</strong>
              <span>11 AM - 9 PM</span>
            </div>
          </div>
          <div className="hero-location-chip">
            <MapPin size={16} />
            Nerul East, Navi Mumbai
          </div>
          <div className="hero-stat-strip">
            {trustBadges.map((badge) => (
              <span key={badge}>
                <ShieldCheck size={15} />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
