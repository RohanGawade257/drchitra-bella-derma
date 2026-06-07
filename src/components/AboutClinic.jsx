import { CheckCircle2 } from 'lucide-react';
import { clinic, images } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function AboutClinic() {
  return (
    <section className="section about-clinic" id="about">
      <div className="container two-column">
        <div>
          <SectionHeading
            eyebrow="About The Clinic"
            title="Real clinic presence, personal care, visible confidence."
            text={`${clinic.name} is a skin, hair, laser and aesthetics clinic located in Nerul East, Navi Mumbai.`}
          />
          <p>
            The clinic offers a range of dermatology, hair care, laser, cosmetic, slimming and wellness
            treatments with a focus on personalized care, affordability and visible results.
          </p>
          <div className="check-list">
            {['Serving patients since 2018', 'Open all 7 days', 'Consultation-based treatment planning'].map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="proof-stack">
          <img
            src={images.clinicFrontDoctor}
            alt="BellaDerma clinic entrance with doctor outside"
            loading="lazy"
            className="story-image front-proof"
          />
          <div className="proof-card">
            <strong>{clinic.rating}/5 rating</strong>
            <span>{clinic.reviews} public ratings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
