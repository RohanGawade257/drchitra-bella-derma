import { MessageCircle } from 'lucide-react';
import { processSteps, whatsappUrl } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function AppointmentProcess() {
  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading eyebrow="Appointment Process" title="Book in four simple steps." />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-card" key={step}>
              <span>Step {index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
        <div className="center-cta">
          <a
            className="btn btn-primary"
            href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I want to book an appointment.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Book Appointment on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
