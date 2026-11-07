# smorzata-landingpage

landing page smorzata — tennis vero, sudore vero.

## struttura

```
index.html            pagina singola, self-contained (nessuna dipendenza js)
assets/render/*.jpg   render approvati della linea (NON ancora in repo, vedi sotto)
```

## render — da copiare una volta sola

i render approvati vivono in `debuy-co/macchina-instagram` in
`config/brands/linea/render/`. il connettore github non riesce a pushare file
binari senza corromperli, quindi vanno copiati a mano una volta:

```bash
git clone git@github.com:debuy-co/smorzata-landingpage.git
cd smorzata-landingpage
mkdir -p assets/render
git checkout git@github.com:debuy-co/macchina-instagram.git main -- config/brands/linea/render
cp config/brands/linea/render/*.jpg assets/render/
git add assets/render && git commit -m "render linea" && git push
```

finché i jpg non ci sono, ogni card mostra il fallback colorway (nessun errore visibile).

file attesi in `assets/render/`:

- `otto-di-sera-1.jpg` (crema) · `otto-di-sera-2.jpg` (terra)
- `cancello-1.jpg` (verde) · `cancello-2.jpg` (crema) · `cancello-3.jpg` (crema) · `cancello-4.jpg` (terra)

nota: del batch manca ancora l'otto di sera verde — quando esiste, aggiungere
`otto-di-sera-3.jpg` e una riga in `SHOTS` dentro `index.html`.

## tipografia live

il preview e la pagina usano font di fallback. prima di pubblicare, caricare da
google fonts: big shoulders stencil 900 (display), schibsted grotesk (heading),
instrument sans (body), dm mono (label/prezzo). il label uppercase resta
riservato a "tennis vero. sudore e passione.".

## form waitlist

il form è demo. collegarlo a shopify (o a un form reale) prima di andare online.
