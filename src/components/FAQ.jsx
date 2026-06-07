import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-redesign section">
      <div className="container narrow">
        <SectionHeading eyebrow="FAQ" title="Common patient questions." />
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className={`faq-item ${active === index ? 'open' : ''}`} key={question}>
              <button type="button" onClick={() => setActive(active === index ? -1 : index)}>
                <span>{question}</span>
                <ChevronDown size={20} />
              </button>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
