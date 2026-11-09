import { useState } from "react";
import { LINEA, COLORWAYS } from "../data/linea.js";

function CapoCard({ capo }) {
  const [attivo, setAttivo] = useState(0);
  const [imgRotta, setImgRotta] = useState(false);
  const shot = capo.shots[attivo];

  return (
    <article className="card">
      <div className="shot" style={{ background: capo.fallback }}>
        {shot && !imgRotta ? (
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            onError={() => setImgRotta(true)}
          />
        ) : (
          <div className="missing">
            <span className="label">{capo.stampe || "render in arrivo"}</span>
          </div>
        )}
      </div>

      {capo.shots.length > 0 && (
        <div className="thumbs" role="group" aria-label="colorway">
          {capo.shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={i === attivo ? "active" : ""}
              aria-label={s.alt}
              onClick={() => {
                setAttivo(i);
                setImgRotta(false);
              }}
            >
              <img src={s.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <div className="body">
        <h3 className="display">{capo.nome}</h3>
        <p className="tipo">{capo.tipo}</p>
        <p>{capo.desc}</p>
        <div className="dots">
          {COLORWAYS.map((c) => (
            <span key={c.nome} style={{ background: c.hex }} title={c.nome} />
          ))}
          <span className="cw">
            {capo.nome === "la riga"
              ? "tre stampe, una per capo"
              : "crema · verde · terra"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Linea() {
  return (
    <section className="linea" id="linea">
      <div className="wrap">
        <h2 className="display">
          la linea<span className="terra">.</span>
        </h2>
        <p className="sub">
          tre capi, tre pesi di tessuto, tre tecniche. ricamato, non urlato.
        </p>
        <div className="cards">
          {LINEA.map((capo) => (
            <CapoCard key={capo.nome} capo={capo} />
          ))}
        </div>
        <p className="nota mono">
          foto rubate col telefono. nessuna posa, nessuno guarda in camera.
        </p>
      </div>
    </section>
  );
}
