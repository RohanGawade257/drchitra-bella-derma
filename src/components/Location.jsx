import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { clinic, images } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function Location() {
  return (
    <section className="section location-section" id="location">
      <div className="container location-grid">
        <div>
          <SectionHeading eyebrow="Location" title="Find BellaDerma in Nerul East." />
          <div className="location-card">
            <MapPin size={22} />
            <div>
              <strong>Clinic address</strong>
              <p>{clinic.address}</p>
              <small>Landmark: {clinic.landmark}</small>
            </div>
          </div>
          <div className="cta-row">
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
        <div className="map-proof">
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
