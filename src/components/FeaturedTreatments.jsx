import { ArrowUpRight } from 'lucide-react';
import { featuredTreatments, whatsappUrl } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function FeaturedTreatments() {
  return (
    <section className="section featured-section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Treatments"
          title="Popular concerns patients ask about."
          text="Recommendations are made after consultation and clinical evaluation."
        />
        <div className="featured-grid">
          {featuredTreatments.map((treatment) => (
            <a
              key={treatment}
              className="featured-card"
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
