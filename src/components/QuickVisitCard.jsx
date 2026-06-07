import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { clinic } from '../data/clinicData';

export default function QuickVisitCard() {
  return (
    <aside className="quick-card" aria-label="Quick clinic visit information">
      <div className="quick-intro">
        <span className="eyebrow">Visit Clinic</span>
        <h3>Nerul East, Navi Mumbai</h3>
      </div>
      <div className="quick-block address-block">
        <MapPin size={18} />
        <div>
          <strong>Address</strong>
          <p>{clinic.address}</p>
        </div>
      </div>
      <div className="quick-block">
        <Clock size={18} />
        <div>
          <strong>Open Today</strong>
          <span>11 AM - 9 PM</span>
        </div>
      </div>
      <div className="quick-block">
        <MapPin size={18} />
        <div>
          <strong>Landmark</strong>
          <span>{clinic.landmark}</span>
        </div>
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
      <a className="btn btn-soft full" href={clinic.directions}>
        <Navigation size={17} />
        Get Directions
      </a>
    </aside>
  );
}
