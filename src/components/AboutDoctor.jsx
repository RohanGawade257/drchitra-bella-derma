import { BadgeCheck, GraduationCap, HeartHandshake } from 'lucide-react';
import { clinic, images } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function AboutDoctor() {
  return (
    <section className="doctor-profile-section section">
      <div className="container doctor-profile-card">
        <div className="doctor-profile-media">
          <img
            src={images.doctorCabin}
            alt="Dr. Chitra Jaiswal seated inside BellaDerma clinic cabin"
            loading="lazy"
          />
        </div>
        <div className="doctor-profile-copy">
          <SectionHeading eyebrow="About Doctor" title={`Meet ${clinic.doctor}`} />
          <p>
            {clinic.doctor} leads {clinic.name} with a patient-first approach, focusing on personalized skin,
            hair, laser and aesthetic care.
          </p>
          <div className="doctor-care-list">
            <div>
              <HeartHandshake size={19} />
              Patient-focused consultation
            </div>
            <div>
              <BadgeCheck size={19} />
              Doctor-led care
            </div>
            <div>
              <GraduationCap size={19} />
              Detailed credentials to be updated after clinic confirmation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
