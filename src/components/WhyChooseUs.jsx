import { CalendarDays, ClipboardCheck, CreditCard, MapPin, Sparkles, Star, Stethoscope } from 'lucide-react';
import { reasons } from '../data/clinicData';
import SectionHeading from './SectionHeading';

const iconMap = { CalendarDays, ClipboardCheck, CreditCard, MapPin, Sparkles, Star, Stethoscope };

export default function WhyChooseUs() {
  return (
    <section className="why-redesign section">
      <div className="container why-layout">
        <div className="why-statement">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trust is designed into every step of the visit."
            text="The website journey now mirrors what patients need: clarity, contact, location confidence and doctor-led care."
          />
        </div>
        <div className="why-trust-grid">
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
