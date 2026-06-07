import clinicExterior from '../assets/images/clinic-exterior.jpg';
import doctorCabin from '../assets/images/doctor-cabin.jpg';
import clinicFrontDoctor from '../assets/images/clinic-front-doctor.jpg';

export const clinic = {
  name: "Dr. Chitra's BellaDerma",
  displayName: "Dr. Chitra's BellaDerma - Skin | Hair | Laser & Aesthetics in Navi Mumbai - Nerul",
  tagline: 'Redefining Beauty With Care',
  category: 'Skin, Hair, Laser & Aesthetics Clinic',
  doctor: 'Dr. Chitra Jaiswal',
  phone: '8591594849',
  phoneLink: 'tel:+918591594849',
  whatsapp: 'https://wa.me/918591594849',
  directions: '#google-map-link',
  address:
    'Shop No. 14, Lenyadri Complex, Plot No. 47/1-2, Opposite Madhavi CHS / Madhavi Society, Nerul East, Sector 19A, Nerul, Navi Mumbai, Maharashtra - 400706',
  landmark: 'Opposite Madhavi Society / Opposite Madhavi CHS',
  area: 'Nerul East, Sector 19A, Navi Mumbai',
  timing: 'Monday to Sunday: 11:00 AM - 9:00 PM',
  rating: '4.8',
  reviews: '524+',
  consultationFee: 'Rs. 400',
  feeNote: 'Please confirm current consultation fee with the clinic before visit.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export const images = {
  clinicExterior,
  doctorCabin,
  clinicFrontDoctor,
};

export const trustBadges = ['4.8 Star Rating', '524+ Reviews', 'Open All 7 Days', 'Since 2018'];

export const paymentMethods = [
  'Cash',
  'UPI',
  'PhonePe',
  'Debit Card',
  'Credit Card',
  'Visa Card',
  'MasterCard',
  'RuPay',
  'Net Banking',
  'Financing Available',
];

export const services = [
  {
    title: 'Skin Care',
    icon: 'Sparkles',
    description: 'Consultation-led care for glow, texture, scars, dullness and skin rejuvenation needs.',
    tags: ['Facial', 'Hydra Facial', 'Skin Rejuvenation', 'Scar Treatment', 'Keloid Treatment', 'Stretch Marks', 'CO2 Laser'],
  },
  {
    title: 'Hair Care',
    icon: 'Scissors',
    description: 'Personalized hair and scalp consultations for hair fall, dandruff and hair health.',
    tags: ['Hair Fall', 'Hair Loss', 'Dandruff', 'Trichology', 'Cysteine Treatment', 'Hair Health', 'Hair Transplant'],
  },
  {
    title: 'Laser Treatments',
    icon: 'Zap',
    description: 'Laser-based treatment options discussed after clinical assessment and suitability check.',
    tags: ['Laser Hair Removal', 'Permanent Hair Reduction', 'Underarms Laser', 'Arms Laser', 'Bikini Laser', 'CO2 Resurfacing'],
  },
  {
    title: 'Aesthetic & Cosmetic Treatments',
    icon: 'Gem',
    description: 'Premium aesthetic skin and cosmetic care with a patient-first approach.',
    tags: ['Aesthetic Skin Care', 'Microblading', 'Cosmetic Dermatology', 'Beauty Enhancement', 'Skin Confidence'],
  },
  {
    title: 'Diet & Wellness',
    icon: 'HeartPulse',
    description: 'Diet consultation support for wellness concerns including PCOS and PCOD counselling.',
    tags: ['PCOS Diet', 'PCOD Diet', 'Diet Consultation', 'Wellness', 'Lifestyle Support'],
  },
  {
    title: 'Slimming / Body Treatments',
    icon: 'Activity',
    description: 'Consultation-based slimming and body contouring related treatment guidance.',
    tags: ['Slimming Treatments', 'Body Sculpting', 'Body Contouring', 'Wellness Plans', 'Consultation'],
  },
];

export const featuredTreatments = [
  'Hydra Facial',
  'Hair Fall Treatment',
  'Laser Hair Removal',
  'Scar & Stretch Marks Treatment',
  'PCOS / PCOD Diet Counselling',
  'Fractional CO2 Laser Resurfacing',
  'Hair Transplant Consultation',
  'Slimming Treatments',
];

export const reasons = [
  {
    title: 'Personalized treatment plans',
    text: 'Care plans are discussed after consultation and evaluation.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Doctor-led care',
    text: 'Consultations are centered around Dr. Chitra Jaiswal and the clinic team.',
    icon: 'Stethoscope',
  },
  {
    title: 'Everything under one roof',
    text: 'Skin, hair, laser, aesthetics, wellness and slimming concerns in one clinic.',
    icon: 'Sparkles',
  },
  {
    title: 'Open all 7 days',
    text: 'Convenient 11 AM to 9 PM timings for busy patients.',
    icon: 'CalendarDays',
  },
  {
    title: 'Strong public rating',
    text: '4.8 rating with 524+ public ratings listed for patient confidence.',
    icon: 'Star',
  },
  {
    title: 'Flexible payments',
    text: 'Cash, UPI, cards, net banking and financing options are listed.',
    icon: 'CreditCard',
  },
  {
    title: 'Nerul East location',
    text: 'Easy to find near Madhavi Society / Madhavi CHS in Sector 19A.',
    icon: 'MapPin',
  },
];

export const processSteps = [
  'Choose your concern',
  'Call or WhatsApp the clinic',
  'Share preferred date and time',
  'Clinic team confirms appointment',
];

export const galleryItems = [
  {
    src: clinicExterior,
    title: 'Clinic exterior and board',
    caption: 'A clear first look at BellaDerma in Nerul East.',
    alt: "Exterior board of Dr. Chitra's BellaDerma clinic in Nerul East",
    className: 'gallery-tall board-focus',
  },
  {
    src: doctorCabin,
    title: 'Doctor cabin',
    caption: 'A calm consultation space for skin, hair and aesthetic care.',
    alt: 'Dr. Chitra Jaiswal seated inside the clinic cabin',
    className: 'gallery-wide doctor-focus',
  },
  {
    src: clinicFrontDoctor,
    title: 'Clinic entrance',
    caption: 'Real clinic frontage for location confidence and trust.',
    alt: 'BellaDerma clinic front with doctor standing near entrance',
    className: 'front-focus',
  },
];

export const faqs = [
  ['What are the clinic timings?', 'The clinic is open Monday to Sunday from 11:00 AM to 9:00 PM.'],
  ['Is the clinic open on Sunday?', 'Yes, the clinic is open all 7 days, including Sunday.'],
  ['How can I book an appointment?', 'You can call the clinic or send a WhatsApp enquiry to 8591594849.'],
  ['What is the consultation fee?', 'The listed consultation fee is Rs. 400. Please confirm the current fee with the clinic before visit.'],
  ['Do you provide laser hair removal?', 'Yes, laser hair removal and permanent hair reduction related services are listed. Suitability is confirmed after consultation.'],
  ['Do you treat hair fall and dandruff?', 'Yes, the clinic lists hair fall consultation, hair loss treatment, dandruff treatment and trichology care.'],
  ['Do you provide PCOS / PCOD diet counselling?', 'Yes, PCOS and PCOD diet counselling are included in the clinic service categories.'],
  ['What payment methods are accepted?', 'Cash, UPI, PhonePe, cards, net banking and financing options are listed as payment methods.'],
  ['Where is the clinic located?', 'The clinic is at Shop No. 14, Lenyadri Complex, Sector 19A, Nerul East, Navi Mumbai.'],
  ['Is prior appointment required?', 'Prior appointment is recommended so the clinic team can confirm your preferred date and time.'],
];

export function whatsappUrl(message) {
  return `${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}
