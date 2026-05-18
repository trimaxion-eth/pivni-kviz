# Pivní kvíz – prezentace

Interaktivní slide deck pro živý pivní kvíz (Port 1560 / Festival piva).

## Spuštění

Prezentace používá ES moduly – otevřete přes lokální server (ne `file://`):

```bash
cd pivni-kviz
python3 -m http.server 8765
```

Poté v prohlížeči: **http://localhost:8765**

## Ovládání

| Akce | Klávesa |
|------|---------|
| Další slide | →, mezerník, Page Down |
| Předchozí | ←, Page Up |
| První / poslední | Home / End |
| Celá obrazovka | F |
| Tlačítka | ← → dole na obrazovce |

## Struktura

- `kviz.md` – zdroj otázek a odpovědí
- `brief.md` – zadání a design
- `images/` – obrázky `{kolo}-{otázka}-*.{ext}`
- `js/quiz-data.js` – data pro slidy
- `js/presentation.js` – vykreslení a navigace
- `css/styles.css` – vzhled (Port 1560)

## Průběh kola

1. Přechod kola → témata → 10 otázek → sběr odpovědí → 2 slidy s odpověďmi  
2. Po 4. kole následuje **Extra** (2 otázky + odpovědi)
