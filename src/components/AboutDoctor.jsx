import { BadgeCheck, GraduationCap, HeartHandshake } from 'lucide-react';
import { clinic, images } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function AboutDoctor() {
  return (
    <section className="section doctor-section">
      <div className="container doctor-card">
        <div className="doctor-photo-wrap">
          <img
            src={images.doctorCabin}
            alt="Dr. Chitra Jaiswal seated inside BellaDerma clinic cabin"
            loading="lazy"
            className="doctor-photo"
          />
        </div>
        <div className="doctor-copy">
          <SectionHeading eyebrow="About Doctor" title={`Meet ${clinic.doctor}`} />
          <p>
            {clinic.doctor} leads {clinic.name} with a patient-first approach, focusing on personalized skin,
            hair, laser and aesthetic care.
          </p>
          <div className="doctor-notes">
            <span>
              <HeartHandshake size={19} />
              Patient-focused consultation
            </span>
            <span>
              <BadgeCheck size={19} />
              Doctor-led care
            </span>
            <span>
              <GraduationCap size={19} />
              Qualification and detailed credentials to be updated after confirmation from clinic.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
