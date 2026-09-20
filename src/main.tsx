import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  Handshake,
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
const mapLink = 'https://maps.app.goo.gl/1LfuDjcNBUCttDuQ6';

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

const recentListingImages = [
  'https://upload.wikimedia.org/wikipedia/commons/e/e1/Ambience_Mall,_Gurgaon.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Vue_de_quartier_r%C3%A9sidentiel_%C3%A0_Gurgaon.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Vipul_Arcade,_Sushant_Lok,_Gurgaon.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Sector-47,_Gurgaon.jpg'
];

const propertyHighlights = [
  {
    title: 'Gurgaon Residential Areas',
    text: 'Established neighborhoods and practical homes for everyday living.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sector-47,_Gurgaon.jpg'
  },
  {
    title: 'Commercial Spaces',
    text: 'Road-facing shops and practical spaces for growing businesses.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cyber_Green_Building,_Gurgaon,_Haryana,_India_-_20070613.jpg'
  },
  {
    title: 'Homes & Floors',
    text: 'Builder floors, houses, and rental options around Gurgaon.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vue_de_quartier_r%C3%A9sidentiel_%C3%A0_Gurgaon.jpg'
  }
];

const serviceSteps = [
  { icon: Compass, title: 'Share your requirement', text: 'Tell us your budget, preferred area, and property type.' },
  { icon: ClipboardCheck, title: 'Shortlist options', text: 'We narrow down suitable sale, purchase, or rental choices.' },
  { icon: Handshake, title: 'Visit and discuss', text: 'Compare the options clearly and move forward with confidence.' }
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

      <div className="availability-ticker" aria-label="Current property availability">
        <div className="ticker-track">
          <span>Plots from 25 sq. yards</span>
          <span>Palam Vihar Extension</span>
          <span>Sale, purchase & rent</span>
          <span>Gurgaon property guidance</span>
          <span>Plots from 25 sq. yards</span>
          <span>Palam Vihar Extension</span>
          <span>Sale, purchase & rent</span>
          <span>Gurgaon property guidance</span>
        </div>
      </div>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Gurgaon property specialists</span>
          <h1>जय हनुमान जी प्रॉपर्टीज</h1>
          <p className="tagline">Sabse Sasta (सबसे सस्ता) Properties</p>
          <p className="deal-line">Sale, Purchase & Rent</p>
          <p>Residential & Commercial Property in Gurgaon and nearby locations.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#plots">Explore properties <span aria-hidden="true">↗</span></a>
            <a className="button button-quiet" href={`tel:+91${phoneNumbers[0]}`}>Talk to us</a>
          </div>
        </div>
        <div className="hero-images" aria-hidden="true">
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gurgaon_skyline.jpg" alt="" />
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ambience_Mall,_Gurgaon.jpg" alt="" />
        </div>
      </section>

      <section className="intro-band" id="about">
        <div>
          <h2>Property Dealing You Can Discuss Clearly</h2>
          <p>Jai Hanuman Ji Property helps customers shortlist practical options for plots, shops, floors, houses, offices, and rental requirements around Palam Vihar Extension, Dharam Colony, Om Vihar, Sector 22, Sector 23, Dwarka Expressway, and Gurgaon.</p>
        </div>
        <a href={`tel:+91${phoneNumbers[0]}`}>Call Now</a>
      </section>

      <section className="stats-band" aria-label="Jai Hanuman Ji Property at a glance">
        <div><strong>7+</strong><span>Local areas covered</span></div>
        <div><strong>25+</strong><span>Plot sizes available</span></div>
        <div><strong>4</strong><span>Property categories</span></div>
        <div><strong>1</strong><span>Clear point of contact</span></div>
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

      <section className="section showcase-section" aria-labelledby="showcase-title">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Options worth exploring</span>
            <h2 id="showcase-title">Find the right kind of space</h2>
          </div>
          <p>From a first plot to a practical commercial address, we help you compare the details that matter.</p>
        </div>
        <div className="showcase-grid">
          {propertyHighlights.map((property) => (
            <article className="showcase-card" key={property.title}>
              <div className="showcase-image"><img src={property.image} alt={property.title} /></div>
              <div className="showcase-copy">
                <h3>{property.title}</h3>
                <p>{property.text}</p>
                <a href="#contact">Discuss options <span aria-hidden="true">↗</span></a>
              </div>
            </article>
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

      <section className="process-section" aria-labelledby="process-title">
        <div className="process-intro">
          <span className="eyebrow">A simpler way to choose</span>
          <h2 id="process-title">From requirement to site visit</h2>
          <p>No confusing lists or rushed decisions. We keep the conversation practical from the first call.</p>
        </div>
        <div className="process-steps">
          {serviceSteps.map((step, index) => (
            <article key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <step.icon size={28} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
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
          <div className="contact-phones">
            {phoneNumbers.map((number, index) => (
              <a key={number} href={`tel:+91${number}`}>{index === 0 && <Phone size={16} />} {number}</a>
            ))}
          </div>
          <a href="mailto:harishshandilya@gmail.com"><Mail size={16} /> harishshandilya@gmail.com</a>
        </div>

        <div className="recent-panel">
          <h3>Recently Listed Properties</h3>
          <div className="recent-grid">
            {recentListings.map((item, index) => (
              <figure key={item}>
                <img src={recentListingImages[index]} alt={item} />
                <figcaption>{item}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="map-panel">
          <h3>Find Us</h3>
          <div className="map-card">
            <iframe
              title="Jai Hanuman Ji Property location map"
              src="https://www.google.com/maps?q=28.498570,77.039187&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="map-details" href={mapLink} target="_blank" rel="noreferrer">
              <span className="pin"><MapPin size={20} fill="currentColor" /></span>
              <span>
                <strong>Palam Vihar Extn.</strong>
                <small>Dharam Colony, Gurgaon</small>
              </span>
            </a>
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
