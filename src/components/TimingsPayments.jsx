import { Clock3, CreditCard } from 'lucide-react';
import { clinic, paymentMethods } from '../data/clinicData';
import SectionHeading from './SectionHeading';

export default function TimingsPayments() {
  return (
    <section className="section timing-section">
      <div className="container timing-grid">
        <div className="timing-panel">
          <SectionHeading eyebrow="Timings" title="Open all 7 days." />
          <div className="big-info">
            <Clock3 size={28} />
            <div>
              <strong>11:00 AM - 9:00 PM</strong>
              <span>{clinic.timing}</span>
            </div>
          </div>
          <div className="fee-note">
            Consultation Fee: <strong>{clinic.consultationFee}</strong>
            <small>{clinic.feeNote}</small>
          </div>
        </div>
        <div className="payment-panel">
          <SectionHeading eyebrow="Payments" title="Flexible payment options." />
          <div className="payment-cloud">
            {paymentMethods.map((method) => (
              <span key={method}>
                <CreditCard size={15} />
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
