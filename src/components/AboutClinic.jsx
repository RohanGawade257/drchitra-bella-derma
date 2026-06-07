import { CheckCircle2 } from 'lucide-react';
import { clinic, images } from '../data/clinicData';

export default function AboutClinic() {
  const trustPoints = ['Serving patients since 2018', 'Open all 7 days', 'Consultation-based treatment planning'];

  return (
    <section className="about-editorial section" id="about">
      <div className="container about-editorial-grid">
        <div className="about-image-stack">
          <img
            src={images.clinicFrontDoctor}
            alt="BellaDerma clinic entrance with doctor outside"
            loading="lazy"
            className="about-image-large"
          />
          <img
            src={images.clinicExterior}
            alt="Readable BellaDerma clinic exterior board"
            loading="lazy"
            className="about-image-small"
          />
        </div>
        <div className="about-copy-panel">
          <span className="eyebrow">About The Clinic</span>
          <h2>Real clinic presence, personal care, visible confidence.</h2>
          <p>
            {clinic.name} is a skin, hair, laser and aesthetics clinic located in Nerul East, Navi Mumbai.
          </p>
          <p>
            The clinic offers a range of dermatology, hair care, laser, cosmetic, slimming and wellness
            treatments with a focus on personalized care, affordability and visible results.
          </p>
          <div className="about-trust-rows">
            {trustPoints.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
