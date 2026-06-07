import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { clinic } from '../data/clinicData';

export default function QuickVisitCard() {
  return (
    <aside className="quick-card" aria-label="Quick clinic visit information">
      <span className="eyebrow">Visit Clinic</span>
      <h3>Nerul East, Navi Mumbai</h3>
      <p>{clinic.address}</p>
      <div className="quick-row">
        <Clock size={18} />
        <span>Open today, 11 AM - 9 PM</span>
      </div>
      <div className="quick-row">
        <MapPin size={18} />
        <span>{clinic.landmark}</span>
      </div>
      <div className="quick-actions">
        <a href={clinic.phoneLink}>
          <Phone size={17} />
          {clinic.phone}
        </a>
        <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
      {/* <!-- Replace #google-map-link with actual Google Maps URL --> */}
      <a className="btn btn-outline full" href={clinic.directions}>
        <Navigation size={17} />
        Get Directions
      </a>
    </aside>
  );
}
