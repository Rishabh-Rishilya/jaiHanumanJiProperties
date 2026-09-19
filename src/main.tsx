import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  FileText,
  Home,
  LandPlot,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Store,
  Trees
} from 'lucide-react';
import './styles.css';

const phoneNumbers = ['9716142888', '9891357416', '9953162725', '8130403897'];

const services = [
  { icon: LandPlot, label: 'Plots For Sale' },
  { icon: Trees, label: 'Plots For Rent' },
  { icon: Store, label: 'Commercial Shops' },
  { icon: Home, label: 'Houses' },
  { icon: Building2, label: 'Floors' },
  { icon: Building2, label: 'Offices' }
];

const propertyTypes = [
  'Residential plots in small and large sizes',
  'Commercial shops and road-facing spaces',
  'Builder floors, flats, and independent houses',
  'Rental options for offices, shops, and plots'
];

const areaHighlights = [
  'Dharam Colony',
  'Om Vihar',
  'Palam Vihar Extension',
  'Sector 22',
  'Sector 23',
  'Dwarka Expressway',
  'Gurgaon nearby locations'
];

const whyChooseUs = [
  { icon: ShieldCheck, title: 'Trusted Local Guidance', text: 'Clear property details, practical advice, and support from site visit to final discussion.' },
  { icon: BadgeIndianRupee, title: 'All Budget Options', text: 'Plots and properties available from compact budgets to bigger investment requirements.' },
  { icon: FileText, title: 'Document Support', text: 'Basic paperwork guidance for buyers, sellers, landlords, and tenants.' },
  { icon: CheckCircle2, title: 'Sale, Purchase & Rent', text: 'One place for buying, selling, renting, and shortlisting suitable property options.' }
];

const recentListings = [
  '25, 50, 100 sq. yard plots',
  'Shopfronts in Om Vihar',
  'Builder floors in Sector 22',
  'Commercial spaces near main road'
];

function App() {
  return (
    <main className="page-shell">
      <header className="top-strip">
        <a href={`tel:+91${phoneNumbers[0]}`}><Phone size={14} /> {phoneNumbers.join(', ')}</a>
        <a href="mailto:harishshandilya@gmail.com"><Mail size={14} /> harishshandilya@gmail.com</a>
      </header>

      <section className="brand-row" aria-label="Jai Hanuman Ji Property">
        <a className="brand" href="#home">जय हनुमान जी</a>
        <div className="hanuman-mark" aria-hidden="true">जय</div>
      </section>

      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#plots">Plots</a>
          <a href="#areas">Areas</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <h1>जय हनुमान जी प्रॉपर्टीज</h1>
          <p className="tagline">Sabse Sasta (सबसे सस्ता) Properties</p>
          <p className="deal-line">Sale, Purchase & Rent</p>
          <p>Residential & Commercial Property in Gurgaon and nearby locations.</p>
        </div>
        <div className="hero-images" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=700&q=80" alt="" />
        </div>
      </section>

      <section className="intro-band" id="about">
        <div>
          <h2>Property Dealing You Can Discuss Clearly</h2>
          <p>Jai Hanuman Ji Property helps customers shortlist practical options for plots, shops, floors, houses, offices, and rental requirements around Palam Vihar Extension, Dharam Colony, Om Vihar, Sector 22, Sector 23, Dwarka Expressway, and Gurgaon.</p>
        </div>
        <a href={`tel:+91${phoneNumbers[0]}`}>Call Now</a>
      </section>

      <section className="section services" id="services">
        <h2>Our Services</h2>
        <div className="service-icons">
          {services.map((service) => (
            <div key={service.label}>
              <service.icon size={44} />
              <span>{service.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section property-listings" id="plots">
        <h2>Property Listings</h2>
        <div className="listing-panels">
          <article>
            <h3>Available Plot Sizes</h3>
            <p>25 sq. yards, 50 sq. yards, 100 sq. yards, 200 sq. yards, 500 sq. yards, 1000 sq. yards, 2000 sq. yards, & all square yards & all budgets</p>
          </article>
          <article>
            <h3>Our Operating Areas</h3>
            <p>Dharam Colony, Om Vihar, Sector 22, Sector 23, Palam Vihar Extension, Gurgaon and Dwarka Expressway</p>
          </article>
        </div>
      </section>

      <section className="detail-grid section">
        <article>
          <h2>Property Types</h2>
          <ul>
            {propertyTypes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article id="areas">
          <h2>Popular Areas</h2>
          <div className="area-tags">
            {areaHighlights.map((area) => <span key={area}>{area}</span>)}
          </div>
        </article>
      </section>

      <section className="section why-section" id="why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <article key={item.title}>
              <item.icon size={34} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <h2>Need a Property Option Today?</h2>
        <p>Share your budget, location preference, and property type. We will help you shortlist suitable options for sale, purchase, or rent.</p>
        <div className="phone-row">
          {phoneNumbers.map((number) => <a key={number} href={`tel:+91${number}`}>{number}</a>)}
        </div>
      </section>

      <footer className="footer">
        <div className="contact-panel" id="contact">
          <h3>Contact</h3>
          <strong>Jai Hanuman Ji Property</strong>
          <p>G-80, RK Tower, Palam Vihar Extn., Dharam Colony, Gurgaon (Hr) 122017</p>
          {phoneNumbers.map((number, index) => (
            <a key={number} href={`tel:+91${number}`}>{index === 0 && <Phone size={16} />} {number}</a>
          ))}
          <a href="mailto:harishshandilya@gmail.com"><Mail size={16} /> harishshandilya@gmail.com</a>
        </div>

        <div className="recent-panel">
          <h3>Recently Listed Properties</h3>
          <div className="recent-grid">
            {recentListings.map((item, index) => (
              <figure key={item}>
                <img src={index % 2 === 0 ? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=300&q=80'} alt={item} />
                <figcaption>{item}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="map-panel">
          <div className="map-card">
            <span className="pin"><MapPin size={26} fill="currentColor" /></span>
            <p>Palam Vihar Extn.</p>
            <small>Dharam Colony, Gurgaon</small>
          </div>
        </div>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
