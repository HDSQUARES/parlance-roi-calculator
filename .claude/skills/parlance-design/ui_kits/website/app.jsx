/* global React, ReactDOM, Parlance */
const { useState: useStateA } = React;
const P = window.Parlance;

const HERO_LOGOS = ['carson-valley-health', 'collaborative-health-partners', 'edward-elmhurst-healthcare', 'griffin-health', 'luminis-health', 'queen-of-the-valley-medical-center', 'santa-clara-regional-medical-center'];

function App() {
  const [demo, setDemo] = useStateA(false);
  const openDemo = () => setDemo(true);

  // Scroll-reveal: reveal .reveal elements as they enter the viewport
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.18 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <P.Nav onDemo={openDemo} />

      <P.Hero
        onDemo={openDemo}
        image="../../assets/hero-man-phone.png"
        title={<><span className="p-accent-teal">Voice AI</span> for the busiest front door in healthcare</>}
        lead="Optimize operations and improve self-service with conversational AI. Parlance answers high-volume calls, routes people the first time, and frees your team for the work that needs a human."
      />

      {/* customer strip */}
      <div className="wrap" style={{ paddingBottom: 56 }}>
        <P.LogoWall logos={HERO_LOGOS} />
      </div>

      <P.StatBand stats={[
        { to: 1.9, decimals: 1, unit: 'B', suffix: '+', cap: 'Calls handled' },
        { to: 400, unit: '', suffix: '+', cap: 'Health systems served' },
        { to: 30, unit: '', suffix: '+', cap: 'Years in healthcare voice' },
        { to: 85, unit: '', suffix: '%+', cap: 'Routine self-service' },
      ]} />

      <P.FeatureGrid heading="Built for the way health systems operate" items={[
        { icon: 'mic', title: 'Proprietary name recognition', body: 'Parlance recognizes physician names, departments, and medications, so callers reach the right place on the first try.' },
        { icon: 'layers', title: 'Real-time EHR & CRM integration', body: 'HIPAA-compliant two-way integration keeps schedules and patient records updated automatically during every call.' },
        { icon: 'shield-check', title: 'Engineered safety', body: 'Hard stops and instant human transfer whenever a call needs a person — escalation is always one step away.' },
      ]} />

      <P.Zones heading="Health system call volume concentrates in three zones. Each has a Parlance AI agent configured for it." zones={[
        { icon: 'headset', title: 'At the switchboard', body: 'Intelligent Voice Assistants answer as many calls as volume demands — without menus or hold times. Operators focus on calls that require human judgment.' },
        { icon: 'calendar-check', title: 'In the patient access center', body: 'Agents automate appointment scheduling, rescheduling, prescription refills, and insurance questions, cutting queue times and after-hours gaps.' },
        { icon: 'map-pin', title: 'Across the clinic network', body: 'Multi-site groups deliver one consistent, branded voice experience across every hospital and clinic, 24/7.' },
      ]} />

      {/* EHR integration — mint section with composite */}
      <section className="section section-mint">
        <div className="wrap hero-grid">
          <div className="composite"><img src="../../assets/hero-agent-headset.png" alt="Agent with Parlance" /></div>
          <div>
            <P.Eyebrow>Capture new revenue</P.Eyebrow>
            <h2 className="p-h2" style={{ margin: '12px 0 16px' }}>Book more appointments from every call</h2>
            <p className="p-body">High inbound call volumes overwhelm contact-center staff. Parlance answers booking requests accurately, triages complex calls to the right desktop, and never misses another chance to fill the schedule.</p>
            <div style={{ marginTop: 22 }}><P.Button variant="outline" onClick={openDemo}>Learn More</P.Button></div>
          </div>
        </div>
      </section>

      <P.Testimonial
        quote="With Parlance, you have a strong partner working with you to make really prudent and thoughtful decisions to optimize the process and the system."
        name="Kelly Hubka"
        title="Director of Population Health & Care Navigation, AdventHealth Shawnee Mission"
        photo="../../assets/logos/luminis-health.png"
      />

      <P.TrustRow heading="Trusted by clinics & hospitals nationwide" items={[
        { icon: 'award', title: 'Longevity', body: '30+ years in healthcare voice.' },
        { icon: 'landmark', title: 'Financial stability', body: 'Backed by Consultation Software.' },
        { icon: 'stethoscope', title: 'Healthcare expertise', body: '400+ health-system clients.' },
        { icon: 'trending-up', title: 'Documented ROI', body: 'Measurable results in 30 days.' },
      ]} />

      <P.CTABand heading="A better way to handle patient calls" onDemo={openDemo} />

      <P.Footer />

      <P.DemoModal open={demo} onClose={() => setDemo(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
