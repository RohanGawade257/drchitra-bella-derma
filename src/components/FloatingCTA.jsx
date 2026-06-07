import { MessageCircle, Navigation, Phone } from 'lucide-react';
import { clinic } from '../data/clinicData';

export default function FloatingCTA() {
  return (
    <>
      <div className="floating-desktop" aria-label="Floating contact buttons">
        <a href={clinic.phoneLink} aria-label="Call clinic">
          <Phone size={20} />
        </a>
        <a href={clinic.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp clinic">
          <MessageCircle size={20} />
        </a>
      </div>
      <div className="floating-mobile" aria-label="Quick contact bar">
        <a href={clinic.phoneLink}>
          <Phone size={18} />
          Call
        </a>
        <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a href={clinic.directions}>
          <Navigation size={18} />
          Directions
        </a>
      </div>
    </>
  );
}
