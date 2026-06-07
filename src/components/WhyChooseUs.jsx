import { CalendarDays, ClipboardCheck, CreditCard, MapPin, Sparkles, Star, Stethoscope } from 'lucide-react';
import { reasons } from '../data/clinicData';
import SectionHeading from './SectionHeading';

const iconMap = { CalendarDays, ClipboardCheck, CreditCard, MapPin, Sparkles, Star, Stethoscope };

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
            <div className="reason-card" key={reason.title}>
              <span className="reason-icon">
                {(() => {
                  const Icon = iconMap[reason.icon];
                  return <Icon size={20} />;
                })()}
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
