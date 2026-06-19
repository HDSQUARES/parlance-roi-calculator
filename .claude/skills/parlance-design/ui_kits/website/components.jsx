/* global React */
// Parlance UI Kit — shared primitives & sections
const { useState, useEffect, useRef } = React;

/* ---------- Icon (Lucide) ---------- */
function Icon({ name, size = 20, color, stroke = 2, style, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.innerHTML = '';
    const i = document.createElement('i'); i.setAttribute('data-lucide', name); el.appendChild(i);
    if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': stroke } });
  }, [name, stroke]);
  return <span ref={ref} className={'licon ' + (className || '')} style={{ width: size, height: size, color, ...style }}></span>;
}

/* ---------- Button ---------- */
function Button({ variant = 'primary', size, children, icon, onClick, href }) {
  const cls = `btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`;
  const inner = <>{children}{icon && <Icon name={icon} size={17} className="i" />}</>;
  return href
    ? <a className={cls} href={href} onClick={onClick}>{inner}</a>
    : <button className={cls} onClick={onClick}>{inner}</button>;
}

/* ---------- Eyebrow / accent headline ---------- */
function Eyebrow({ children, onDark }) {
  return <div className={'p-eyebrow' + (onDark ? ' on-dark' : '')}>{children}</div>;
}

/* ---------- Voice composite bubbles & waveform ---------- */
function Waveform({ n = 22 }) {
  return (
    <div className="waveform">
      <Icon name="play" size={17} className="play" style={{ color: 'var(--navy-900)' }} stroke={0} />
      <div className="bars">
        {Array.from({ length: n }).map((_, i) => (
          <span key={i} style={{ height: (6 + Math.round(Math.abs(Math.sin(i * 0.9)) * 16)) + 'px', animationDelay: (i * 0.05) + 's' }} />
        ))}
      </div>
    </div>
  );
}
function Bubble({ tone = 'navy', eyebrow, icon, children }) {
  return (
    <div className={'bubble bubble-' + tone}>
      {icon && <Icon name={icon} size={17} />}
      <span>
        {eyebrow && <span className="ey">{eyebrow}</span>}
        <span style={{ display: 'block' }}>{children}</span>
      </span>
    </div>
  );
}

/* ---------- Count-up number (animates when scrolled into view) ---------- */
function CountUp({ to, decimals = 0, dur = 1500 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf, started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const step = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, dur]);
  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

/* ---------- Stat band ---------- */
function StatBand({ stats }) {
  return (
    <section className="statband">
      <div className="wrap">
        {stats.map((s, i) => (
          <div className="stat reveal" key={i} style={{ transitionDelay: (i * 0.08) + 's' }}>
            <div className="num"><CountUp to={s.to} decimals={s.decimals || 0} />{s.unit}<small>{s.suffix}</small></div>
            <div className="cap">{s.cap}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Feature grid (yellow tiles) ---------- */
function FeatureGrid({ heading, items }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="feat-head"><h2 className="p-h2">{heading}</h2></div>
        <div className="feat-grid">
          {items.map((it, i) => (
            <div className="feat reveal" key={i} style={{ transitionDelay: (i * 0.1) + 's' }}>
              <div className="tile"><Icon name={it.icon} size={28} className="i" style={{ color: '#fff' }} stroke={2.2} /></div>
              <h3 className="p-h3">{it.title}</h3>
              <p className="p-body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo wall ---------- */
function LogoWall({ logos, base = '../../assets/logos/' }) {
  return (
    <div className="logowall">
      {logos.map((l) => <img key={l} src={base + l + '.png'} alt={l} />)}
    </div>
  );
}

window.Parlance = Object.assign(window.Parlance || {}, {
  Icon, Button, Eyebrow, Waveform, Bubble, CountUp, StatBand, FeatureGrid, LogoWall,
});
