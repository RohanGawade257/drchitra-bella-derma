import { useState } from 'react';
import { Send } from 'lucide-react';
import { whatsappUrl } from '../data/clinicData';
import SectionHeading from './SectionHeading';

const initialForm = {
  name: '',
  phone: '',
  whatsapp: '',
  age: '',
  gender: '',
  concern: '',
  date: '',
  time: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const required = ['name', 'phone', 'concern', 'date', 'time'];
    const missing = required.some((field) => !form[field].trim());
    if (missing) {
      setError('Please fill your name, phone, concern, preferred date and time.');
      return;
    }

    setError('');
    const message = `Hello Dr. Chitra's BellaDerma, I want to book an appointment.
Name: ${form.name}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp || form.phone}
Age: ${form.age || 'Not shared'}
Gender: ${form.gender || 'Not shared'}
Concern: ${form.concern}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Message: ${form.message || 'Not shared'}`;

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Book or enquire on WhatsApp."
            text="Share your concern and preferred slot. The clinic team can confirm appointment availability."
          />
          <div className="contact-note">
            <strong>WhatsApp appointment request</strong>
            <span>This form opens WhatsApp with your appointment details.</span>
          </div>
        </div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <label>
            Full Name*
            <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
          </label>
          <label>
            Phone Number*
            <input name="phone" value={form.phone} onChange={updateField} inputMode="tel" autoComplete="tel" required />
          </label>
          <label>
            WhatsApp Number
            <input name="whatsapp" value={form.whatsapp} onChange={updateField} inputMode="tel" />
          </label>
          <label>
            Age
            <input name="age" value={form.age} onChange={updateField} inputMode="numeric" />
          </label>
          <label>
            Gender
            <select name="gender" value={form.gender} onChange={updateField}>
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </select>
          </label>
          <label>
            Concern / Treatment Needed*
            <input name="concern" value={form.concern} onChange={updateField} required />
          </label>
          <label>
            Preferred Appointment Date*
            <input name="date" type="date" value={form.date} onChange={updateField} required />
          </label>
          <label>
            Preferred Time Slot*
            <select name="time" value={form.time} onChange={updateField} required>
              <option value="">Select time</option>
              <option>11:00 AM - 1:00 PM</option>
              <option>1:00 PM - 3:00 PM</option>
              <option>3:00 PM - 5:00 PM</option>
              <option>5:00 PM - 7:00 PM</option>
              <option>7:00 PM - 9:00 PM</option>
            </select>
          </label>
          <label className="full-field">
            Message
            <textarea name="message" value={form.message} onChange={updateField} rows="4" />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button className="btn btn-primary full-field" type="submit">
            <Send size={18} />
            Send Appointment Details on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
