# smorzata-landingpage

landing page smorzata — tennis vero, sudore vero. react + vite, stili in scss.

## sviluppo

```bash
npm install
npm run dev      # locale
npm run build    # dist/ pronto per pubblicare
```

## struttura

```
index.html                    entry vite
src/main.jsx                 bootstrap react
src/App.jsx                  composizione sezioni
src/components/              header, hero, linea, waitlist, come scegliamo, footer
src/data/linea.js            dati capi, colorway e render (unica fonte)
src/styles/main.scss         importa i partial
src/styles/_tokens.scss      colori e font del design system
public/assets/render/*.jpg   render approvati della linea
```

## render

i render approvati vivono in `debuy-co/macchina-instagram` in
`config/brands/linea/render/` e vanno copiati in `public/assets/render/`
(stessi nomi file):

```bash
git clone git@github.com:debuy-co/smorzata-landingpage.git
cd smorzata-landingpage
mkdir -p public/assets/render
git checkout git@github.com:debuy-co/macchina-instagram.git main -- config/brands/linea/render
cp config/brands/linea/render/*.jpg public/assets/render/
git add public/assets/render && git commit -m "render linea" && git push
```

finché i jpg non ci sono, ogni card mostra il fallback colorway (`onError`).

file attesi:

- `otto-di-sera-1.jpg` (crema) · `otto-di-sera-2.jpg` (terra)
- `cancello-1.jpg` (verde) · `cancello-2.jpg` (crema) · `cancello-3.jpg` (crema) · `cancello-4.jpg` (terra)

nota: manca ancora l'otto di sera verde — quando esiste, aggiungere
`otto-di-sera-3.jpg` in `public/assets/render/` e una riga in
`src/data/linea.js`.

## deploy su github pages (smorzata.com)

già configurato:

- `.github/workflows/pages.yml` — a ogni push su main builda con vite e pubblica `dist/`
- `public/CNAME` — dice a pages di servire `smorzata.com`
- `vite.config.js` — `base: "./"` così gli asset funzionano anche sotto il dominio custom

da fare una volta sola:

1. repo → settings → pages → source: **github actions**
2. dns del dominio (dal pannello del registrar):
   - `smorzata.com` → record **A** verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www.smorzata.com` → record **CNAME** verso `<utente>.github.io`
3. aspetta la propagazione (minuti-ore), poi settings → pages → **enforce https**

nota: pages su repo private richiede un piano github a pagamento; su repo pubblica è gratis.

## tipografia live

i fallback vanno bene per lo sviluppo. prima di pubblicare, caricare da google
fonts: big shoulders stencil 900 (display), schibsted grotesk (heading),
instrument sans (body), dm mono (label/prezzo), e dichiararli in
`src/styles/_tokens.scss`. il label uppercase resta riservato a
"tennis vero. sudore e passione.".

## form waitlist

il form è demo. collegarlo a shopify (o a un form reale) prima di andare online.
