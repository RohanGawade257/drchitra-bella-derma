import { useState } from 'react';
import { Activity, ArrowUpRight, Gem, HeartPulse, MessageCircle, Scissors, Sparkles, Zap } from 'lucide-react';
import { services, whatsappUrl } from '../data/clinicData';

const iconMap = { Activity, Gem, HeartPulse, Scissors, Sparkles, Zap };

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = iconMap[activeService.icon];
  const message = `Hello Dr. Chitra's BellaDerma, I would like to enquire about ${activeService.title}. Please share appointment details.`;

  return (
    <section className="service-browser section" id="services">
      <div className="container">
        <div className="service-browser-head">
          <span className="eyebrow">Services</span>
          <h2>Choose your concern, then ask the clinic directly.</h2>
          <p>Browse by category. Exact treatment names and suitability are confirmed with the clinic.</p>
        </div>

        <div className="service-console">
          <div className="service-tabs" role="tablist" aria-label="Service categories">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const selected = index === activeIndex;
              return (
                <button
                  className={`service-tab ${selected ? 'active' : ''}`}
                  key={service.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveIndex(index)}
                >
                  <Icon size={19} />
                  <span>{service.title}</span>
                  <ArrowUpRight size={15} />
                </button>
              );
            })}
          </div>

          <article className="service-detail-panel">
            <div className="service-detail-top">
              <div className="service-detail-icon">
                <ActiveIcon size={30} />
              </div>
              <div>
                <span className="eyebrow">Selected Service</span>
                <h3>{activeService.title}</h3>
              </div>
            </div>
            <p>{activeService.description}</p>
            <div className="treatment-chip-grid">
              {activeService.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="btn btn-primary service-panel-cta" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Enquire About {activeService.title}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
