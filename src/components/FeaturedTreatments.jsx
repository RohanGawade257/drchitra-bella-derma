import { ArrowUpRight } from 'lucide-react';
import { featuredTreatments, whatsappUrl } from '../data/clinicData';

export default function FeaturedTreatments() {
  return (
    <section className="concerns-section section">
      <div className="container">
        <div className="concerns-head">
          <span className="eyebrow">Popular Concerns</span>
          <h2>What are you looking for?</h2>
          <p>Fast shortcuts for common patient enquiries. Recommendations are made after consultation.</p>
        </div>
        <div className="concern-tiles">
          {featuredTreatments.map((treatment) => (
            <a
              key={treatment}
              className="concern-tile"
              href={whatsappUrl(`Hello Dr. Chitra's BellaDerma, I would like to enquire about ${treatment}.`)}
              target="_blank"
              rel="noreferrer"
            >
              <span>{treatment}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
