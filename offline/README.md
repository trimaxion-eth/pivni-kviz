# Offline prezentace

Samostatná verze pivního kvízu bez lokálního serveru — otevřete **`index.html`** dvojklikem nebo přes `file://`.

Používá **stejné zdroje** jako online verze v kořeni repozitáře:

| Co upravit | Kde |
|------------|-----|
| Text kvízu, otázky, odpovědi | `js/quiz-data.js` |
| Logika slidů | `js/presentation.js`, `js/slide-render.js` |
| Vzhled | `css/styles.css` |
| Obrázky | `images/` |

Po změně znovu sestavte offline bundle:

```bash
python3 offline/build.py
```

Vygeneruje `offline/bundle.js` (sloučené JS bez ES modulů) a `offline/offline.css` (styly + lokální fonty Cormorant Garamond a Source Sans 3, stejné jako online verze).

## Spuštění

1. `python3 offline/build.py` (po úpravách zdrojů)
2. Otevřete `offline/index.html`

Ovládání: šipky, mezerník, Home/End, F pro celou obrazovku — stejné jako u `index.html` v kořeni.

## Poznámky

- Online verze (`index.html`) potřebuje lokální server kvůli ES modulům; offline verze je kvůli `file://` bez `import`/`export`.
- Obrázky zůstávají v kořenové složce `images/` — nejsou vkládány do HTML.
