/* global React, Parlance */
// Parlance UI Kit — larger page sections
const { useState: useStateS } = React;
const { Icon: IconS, Button: BtnS, Eyebrow: EyebrowS, LogoWall: LogoWallS } = window.Parlance;

/* ---------- Dark "three zones" interactive section ---------- */
function Zones({ heading, zones }) {
  const [active, setActive] = useStateS(0);
  return (
    <section className="zones section">
      <div className="wrap">
        <h2 className="p-h2">{heading}</h2>
        <div>
          {zones.map((z, i) => (
            <div className={'zone-row reveal' + (active === i ? ' active' : '')} key={i} style={{ transitionDelay: (i * 0.08) + 's' }} onClick={() => setActive(i)}>
              <div className="zi"><IconS name={z.icon} size={23} className="i" stroke={2} /></div>
              <div>
                <h3>{z.title}</h3>
                <p>{z.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonial ---------- */
function Testimonial({ quote, name, title, photo }) {
  return (
    <section className="section section-mint">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <EyebrowS>What our customers say</EyebrowS>
        <div className="testi reveal" style={{ marginTop: 28 }}>
          {photo && <img className="ph" src={photo} alt={name} />}
          <div>
            <blockquote>{quote}</blockquote>
            <div className="who"><b>{name}</b><span>{title}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust row ---------- */
function TrustRow({ heading, items }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="feat-head"><h2 className="p-h2">{heading}</h2></div>
        <div className="trust">
          {items.map((it, i) => (
            <div className="reveal" key={i} style={{ transitionDelay: (i * 0.1) + 's' }}>
              <div className="ti"><IconS name={it.icon} size={32} className="i" /></div>
              <h4>{it.title}</h4>
              <p className="p-sm">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA band ---------- */
function CTABand({ heading, onDemo }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="ctaband reveal">
          <h2 className="p-h2">{heading}</h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <BtnS variant="yellow" size="lg" onClick={onDemo}>Schedule a Live Demo</BtnS>
            <BtnS variant="ondark" size="lg">Talk to an Expert</BtnS>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    ['Solutions', ['Switchboard', 'Contact Center', 'Clinics', 'Speech Attendant', 'Call Routing']],
    ['Industries', ['Healthcare', 'Higher Education', 'Enterprise']],
    ['Resources', ['Blogs', 'Media', 'Publications', 'Glossary']],
    ['About Us', ['Why Parlance', 'Meet the Team', 'Careers']],
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="flogo" src="../../assets/logo-parlance-white.png" alt="Parlance" />
            <div className="addr">
              Parlance Corporation · 400 West Cummings Park, Suite 2000, Woburn MA 01801
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><IconS name="phone" size={15} color="var(--parlance-yellow)" /> 888-700-6263</span>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><IconS name="mail" size={15} color="var(--parlance-yellow)" /> customerservice@parlancecorp.com</span>
              </div>
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <h5>{h}</h5>
              <ul>{items.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Parlance Corporation</span>
          <span style={{ display: 'flex', gap: 22 }}><a href="#">Privacy Policy</a><a href="#">Security Policy</a></span>
        </div>
      </div>
    </footer>
  );
}

window.Parlance = Object.assign(window.Parlance || {}, { Zones, Testimonial, TrustRow, CTABand, Footer });
