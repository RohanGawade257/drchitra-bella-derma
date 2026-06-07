import { Clock3, CreditCard } from 'lucide-react';
import { clinic, paymentMethods } from '../data/clinicData';

export default function TimingsPayments() {
  return (
    <section className="info-panel-section section">
      <div className="container info-panel-grid">
        <div className="timing-panel info-card">
          <span className="eyebrow">Timings</span>
          <h2>Open all 7 days.</h2>
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
        <div className="payment-panel info-card">
          <span className="eyebrow">Payments</span>
          <h2>Flexible payment options.</h2>
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
