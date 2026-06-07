import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { clinic, images } from '../data/clinicData';

export default function Location() {
  return (
    <section className="location-concierge section" id="location">
      <div className="container location-concierge-grid">
        <div className="location-copy">
          <span className="eyebrow">Location</span>
          <h2>Find BellaDerma without guesswork.</h2>
          <div className="location-detail-block">
            <MapPin size={22} />
            <div>
              <strong>Clinic address</strong>
              <p>{clinic.address}</p>
            </div>
          </div>
          <div className="location-detail-block">
            <MapPin size={22} />
            <div>
              <strong>Landmark</strong>
              <p>{clinic.landmark}</p>
            </div>
          </div>
          <div className="location-actions">
            <a className="btn btn-primary" href={clinic.directions}>
              <Navigation size={18} />
              Get Directions
            </a>
            <a className="btn btn-outline" href={clinic.phoneLink}>
              <Phone size={18} />
              Call Clinic
            </a>
            <a className="btn btn-soft" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp Clinic
            </a>
          </div>
        </div>
        <div className="location-visual-panel">
          <img
            src={images.clinicExterior}
            alt="Readable BellaDerma clinic board used for location proof"
            loading="lazy"
          />
          <div className="map-placeholder">
            {/* <!-- Replace this iframe src with actual Google Maps embed link --> */}
            <iframe
              title="Google Map placeholder for Dr. Chitra's BellaDerma"
              src="about:blank"
              loading="lazy"
            />
            <span>Google Map embed placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
