import { clinic, navLinks, services } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-disclaimer">
        <strong>Medical disclaimer</strong>
        <p>
          Results may vary from person to person. Treatment recommendations are provided after consultation and
          clinical evaluation.
        </p>
      </div>
      <div className="container footer-grid">
        <div>
          <h2>{clinic.name}</h2>
          <p>{clinic.tagline}</p>
          <p>{clinic.address}</p>
          <a href={clinic.phoneLink}>{clinic.phone}</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.map((service) => (
            <a key={service.title} href="#services">
              {service.title}
            </a>
          ))}
        </div>
        <div>
          <h3>Timings</h3>
          <p>{clinic.timing}</p>
          <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp Clinic
          </a>
          <small>Copyright 2026 {clinic.name}. Results may vary.</small>
        </div>
      </div>
    </footer>
  );
}
