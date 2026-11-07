const REGOLE = [
  {
    n: "1",
    titolo: "passione",
    testo: "se non lo metteremmo noi, non lo mettiamo in linea.",
  },
  {
    n: "2",
    titolo: "ricerca sul campo",
    testo: "ogni capo provato giocando, non solo guardato. tre lavate a 30°, una partita nella tee.",
  },
  {
    n: "3",
    titolo: "vestibilità fuori dal campo",
    testo: "una smorzata non urla.",
  },
];

export default function ComeScegliamo() {
  return (
    <section className="scelgo" id="come-scegliamo">
      <div className="wrap">
        <h2 className="display">
          come scegliamo<span className="terra">.</span>
        </h2>
        <div className="rules">
          {REGOLE.map((r) => (
            <div className="rule" key={r.n}>
              <span className="num">{r.n}</span>
              <h4 className="display">{r.titolo}</h4>
              <p>{r.testo}</p>
            </div>
          ))}
        </div>
        <p className="sig display">smorzata — tennis vero, sudore vero.</p>
      </div>
    </section>
  );
}
