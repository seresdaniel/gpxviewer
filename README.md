# GPX Viewer v2.3

Statikus, mobilbarát GPX megjelenítő GitHub Pageshez.

## v2.3 javítás

- Az OpenStreetMap publikus raster tile szervere teljesen kikerült a projektből.
- A háttértérkép OpenFreeMap + MapLibre vector tile alapú.
- Nincs API-kulcs.
- A GPX feldolgozása továbbra is kizárólag a böngészőben történik.
- A service worker nem cache-eli és nem proxyzza a külső térképes/CDN kéréseket.
- Új cache verzió: `gpx-viewer-v2.3`.

## GitHub Pages

A mappa tartalmát másold a repository gyökerébe, majd Settings → Pages → Deploy from a branch → main → /(root).

Frissítés után egyszer töltsd újra az oldalt. A v2.3 service worker aktiváláskor törli a korábbi alkalmazás-cache verziókat.

## Térképadatok

OpenFreeMap / OpenMapTiles, OpenStreetMap adatokkal. Az attribúció a térképen megjelenik.


## v2.3
- Interaktív elevation diagram távolság-, magasság- és meredekség-tooltipppel.
- Egérrel és érintéssel is követhető; a térképen ugyanaz a pont kiemelődik.
- Távolság- és min/max magasság-skála a diagramon.
