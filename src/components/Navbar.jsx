import { useEffect, useState } from 'react';
import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import { clinic, navLinks, whatsappUrl } from '../data/clinicData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'island' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={handleNavClick}>
          <span className="brand-mark">BD</span>
          <span>
            <strong>{clinic.name}</strong>
            <small>{clinic.tagline}</small>
          </span>
        </a>

        <div className="desktop-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="icon-link" href={clinic.phoneLink} aria-label="Call clinic">
            <Phone size={17} />
          </a>
          <a
            className="btn btn-primary nav-cta"
            href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I would like to book an appointment.")}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarCheck size={17} />
            Book Appointment
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-panel ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleNavClick}>
            {link.label}
          </a>
        ))}
        <a href={clinic.phoneLink} onClick={handleNavClick}>
          Call
        </a>
        <a href={clinic.whatsapp} target="_blank" rel="noreferrer" onClick={handleNavClick}>
          WhatsApp
        </a>
        <a
          className="btn btn-primary"
          href={whatsappUrl("Hello Dr. Chitra's BellaDerma, I would like to book an appointment.")}
          target="_blank"
          rel="noreferrer"
          onClick={handleNavClick}
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
