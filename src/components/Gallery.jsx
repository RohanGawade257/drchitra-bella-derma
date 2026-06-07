import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryItems } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A real look at the clinic."
          text="Clinic images are used as trust assets so patients can recognize the space before visiting."
        />
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              className={`gallery-item ${item.className}`}
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Open image: ${item.title}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>
                <strong>{item.title}</strong>
                <small>{item.caption}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={galleryItems[active].title}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close image">
            <X size={24} />
          </button>
          <img src={galleryItems[active].src} alt={galleryItems[active].alt} />
          <p>{galleryItems[active].caption}</p>
        </div>
      )}
    </section>
  );
}
