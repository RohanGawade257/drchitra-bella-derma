import { CheckCircle2 } from 'lucide-react';
import { reasons } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed around trust, clarity and convenience."
        />
        <div className="reason-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason}>
              <CheckCircle2 size={20} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
