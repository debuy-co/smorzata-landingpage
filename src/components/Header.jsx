export default function Header() {
  return (
    <header className="header">
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="smorzata">
          <svg width="22" height="30" viewBox="0 0 200 260" aria-hidden="true">
            <rect x="56" y="0" width="88" height="88" rx="44" fill="#b5472a" />
            <line x1="100" y1="118" x2="100" y2="260" stroke="#141412" strokeWidth="18" />
          </svg>
          <span className="display nav-name">
            smorzata<span className="terra">.</span>
          </span>
        </a>
        <nav className="links">
          <a href="#linea">la linea</a>
          <a href="#come-scegliamo">come scegliamo</a>
          <a href="#waitlist">waitlist</a>
        </nav>
      </div>
    </header>
  );
}
