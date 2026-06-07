import { CalendarCheck, Clock3, MapPin, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { clinic, whatsappUrl } from '../data/clinicData';

const items = [
  { icon: Star, label: 'Public rating', value: '4.8 / 5' },
  { icon: ShieldCheck, label: 'Patient ratings', value: '524+' },
  { icon: Clock3, label: 'Availability', value: 'Open all 7 days' },
  { icon: MapPin, label: 'Clinic area', value: 'Nerul East' },
  { icon: CalendarCheck, label: 'Care model', value: 'Consultation-based' },
  { icon: MessageCircle, label: 'Booking', value: 'WhatsApp enabled' },
];

export default function TrustSnapshot() {
  return (
    <section className="trust-snapshot" aria-label="Clinic trust snapshot">
      <div className="container">
        <div className="trust-dashboard">
          <div className="trust-dashboard-intro">
            <span className="eyebrow">Quick Trust Snapshot</span>
            <h2>Everything patients check before booking.</h2>
          </div>
          <div className="trust-dashboard-grid">
            {items.map(({ icon: Icon, label, value }) => (
              <div className="trust-metric" key={label}>
                <Icon size={19} />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <a
            className="trust-booking"
            href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I would like to book an appointment.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Book on WhatsApp
          </a>
        </div>
        <p className="trust-address">{clinic.address}</p>
      </div>
    </section>
  );
}
