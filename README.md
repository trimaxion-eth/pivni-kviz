# Pivní kvíz – prezentace

Interaktivní slide deck pro živý pivní kvíz (Port 1560 / Festival piva).

## Spuštění

Prezentace používá ES moduly – otevřete přes lokální server (ne `file://`). Spouštějte z **kořene tohoto repozitáře** (složka s `index.html`):

```bash
# varianta A – npm (doporučeno, port 8766)
npm start

# varianta B – Python
python3 -m http.server 8766
```

Poté v prohlížeči: **http://localhost:8766**

**Port 8765 nefunguje?** Na WSL/Linuxu bývá `8765` už obsazený jiným `python3 -m http.server` (často z jiného projektu). Pak buď použijte **8766** výše, nebo uvolněte port:

```bash
# kdo drží port (např. 8765)
ss -tlnp | grep 8765

# ukončit daný proces (nahraďte PID)
kill <PID>
```

Jiný port: `python3 -m http.server 0` vypíše volný port v konzoli; v prohlížeči použijte stejné číslo v URL.

### Offline (bez serveru)

Ve složce **`offline/`** — otevřete `offline/index.html` (bez serveru). Text a obrázky upravujte v kořeni (`js/quiz-data.js`, `images/`), pak:

```bash
python3 offline/build.py
```

Viz `offline/README.md`.

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
- `offline/` – offline prezentace (`index.html` + `build.py`) ze stejných zdrojů jako online
- `presentation/` – portable export (stejný vzhled jako `index.html`) + PDF

## Průběh kola

1. Přechod kola → témata → 10 otázek → sběr odpovědí → odpovědi po otázkách
