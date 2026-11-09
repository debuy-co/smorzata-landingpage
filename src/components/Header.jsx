export default function Header() {
  return (
    <header className="header">
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="smorzata">
          <img
            className="nav-logo"
            src={`${import.meta.env.BASE_URL}assets/logo/smorzata-logotipo.svg`}
            alt="smorzata"
          />
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
