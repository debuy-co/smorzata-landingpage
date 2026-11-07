import { useState } from "react";

function validaEmail(v) {
  const at = v.indexOf("@");
  return at > 0 && v.indexOf(".") > at;
}

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [fatto, setFatto] = useState(false);
  const [errore, setErrore] = useState(false);

  function invia(e) {
    e.preventDefault();
    if (validaEmail(email.trim())) {
      setFatto(true);
      setErrore(false);
      setEmail("");
    } else {
      setErrore(true);
    }
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="wrap">
        <h2 className="display">
          la waitlist è aperta<span className="terra">.</span>
        </h2>
        <p>
          produciamo solo quando la lista giustifica il lotto. niente capi invenduti,
          niente sconti finti.
        </p>
        <form onSubmit={invia} autoComplete="off">
          <input
            type="email"
            value={email}
            placeholder="la tua email"
            aria-label="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">entro</button>
        </form>
        {fatto && <p className="ok">sei dentro. ti scriviamo solo quando conta.</p>}
        {errore && <p className="ko">email non valida. riprova.</p>}
        <p className="fine">
          nessuno spam. ti scriviamo quando apre il preordine. rimborso garantito se il
          lotto non parte.
        </p>
      </div>
    </section>
  );
}
