# GPX Viewer 2.4

GitHub Pages javítás: a teljes alkalmazás saját CSS-e és JavaScriptje közvetlenül az `index.html` fájlba került. Így nincs `css/` vagy `js/` relatív útvonal, amit GitHub Pages alatt el lehet rontani.

## Telepítés
1. A repository gyökerébe töltsd fel az `index.html` fájlt.
2. A korábbi `css`, `js`, `sw.js` és `manifest.webmanifest` fájlok már nem szükségesek.
3. GitHub Pages: Settings → Pages → Deploy from a branch → main → /(root).
4. Az oldal betöltésekor a v2.4 megpróbálja eltávolítani a korábbi GPX Viewer service workereket és cache-eket.

A Leaflet/MapLibre könyvtárak továbbra is CDN-ről töltődnek, a térkép pedig OpenFreeMapot használ.
