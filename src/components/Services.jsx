import { Activity, Gem, HeartPulse, MessageCircle, Scissors, Sparkles, Zap } from 'lucide-react';
import { services, whatsappUrl } from '../data/clinicData';
import SectionHeading from './SectionHeading';

const iconMap = { Activity, Gem, HeartPulse, Scissors, Sparkles, Zap };

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Skin, hair, laser, wellness and aesthetics under one roof."
          text="Exact treatment names to be confirmed with clinic."
        />
        <div className="service-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const message = `Hello Dr. Chitra's BellaDerma, I would like to enquire about ${service.title}. Please share appointment details.`;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-cloud">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="text-link" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} />
                  Enquire Now
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
