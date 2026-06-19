/* global React, Parlance */
// Parlance UI Kit — nav, demo modal, hero
const { useState: useStateN } = React;
const { Icon: IconN, Button: BtnN, Eyebrow: EyebrowN } = window.Parlance;

const NAV = [
  { label: 'Solutions', items: [
    ['Switchboard', 'Every call answered & routed'],
    ['Contact Center', 'Reduce routine call volume'],
    ['Clinics', 'Make every interaction easier'],
    ['Speech Attendant', 'Conversational IVR'],
    ['Call Routing', 'Intelligent destination routing'],
  ] },
  { label: 'Industries', items: [['Healthcare', 'Hospitals & health systems'], ['Higher Education', 'Campuses & colleges'], ['Enterprise', 'Large organizations']] },
  { label: 'Resources', items: [['Blogs', ''], ['Media', ''], ['Publications', ''], ['Glossary', '']] },
  { label: 'About Us', items: [['Why Parlance', ''], ['Meet the Team', ''], ['Careers', '']] },
];

function Nav({ onDemo }) {
  const [open, setOpen] = useStateN(null);
  return (
    <>
      <div className="utilbar">Meet Parlance at upcoming healthcare events. <a href="#">Details →</a></div>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="nav-logo" href="#"><img src="../../assets/logo-parlance-white.png" alt="Parlance" /></a>
          <div className="nav-links">
            {NAV.map((n, i) => (
              <div className={'nav-item' + (open === i ? ' open' : '')} key={n.label}
                   onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)}>
                <button className="nav-link">{n.label}<IconN name="chevron-down" size={15} className="chev" /></button>
                <div className="dropdown">
                  {n.items.map(([t, d]) => <a href="#" key={t}>{t}{d && <span>{d}</span>}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div className="nav-actions">
            <button className="nav-login">Log In</button>
            <BtnN variant="primary" onClick={onDemo}>Request a Demo</BtnN>
          </div>
        </div>
      </nav>
    </>
  );
}

function DemoModal({ open, onClose }) {
  const [sent, setSent] = useStateN(false);
  if (!open) return null;
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><IconN name="x" size={22} /></button>
        {!sent ? (
          <>
            <EyebrowN>Get started</EyebrowN>
            <h3 className="p-h3" style={{ marginTop: 6 }}>Schedule a live demo</h3>
            <p className="p-sm">See how Parlance handles real patient calls.</p>
            <div className="field"><label>Work email</label><input type="email" placeholder="you@healthsystem.org" /></div>
            <div className="field"><label>Organization</label><input type="text" placeholder="Health system name" /></div>
            <div className="field"><label>Role</label>
              <select><option>Patient Access</option><option>Contact Center Ops</option><option>IT / Telecom</option><option>Executive</option></select>
            </div>
            <div style={{ marginTop: 22 }}><BtnN variant="primary" size="lg" onClick={() => setSent(true)}>Request a Demo</BtnN></div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <IconN name="check-circle-2" size={48} color="var(--success)" />
            <h3 className="p-h3" style={{ marginTop: 14 }}>Thanks — we'll be in touch</h3>
            <p className="p-sm">A Parlance specialist will reach out within one business day.</p>
            <div style={{ marginTop: 18 }}><BtnN variant="outline" onClick={onClose}>Close</BtnN></div>
          </div>
        )}
      </div>
    </div>
  );
}

function Hero({ eyebrowAccent, title, lead, onDemo, image }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 className="p-display">{title}</h1>
          <p className="p-lead">{lead}</p>
          <div className="hero-cta">
            <BtnN variant="primary" size="lg" onClick={onDemo}>Schedule a Live Demo</BtnN>
            <BtnN variant="outline" size="lg" icon="play-circle">Chat with our AI Agent</BtnN>
          </div>
        </div>
        <div className="composite"><img src={image} alt="Parlance voice AI in action" /></div>
      </div>
    </section>
  );
}

window.Parlance = Object.assign(window.Parlance || {}, { Nav, DemoModal, Hero });
