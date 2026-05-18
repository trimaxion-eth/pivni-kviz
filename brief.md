# Brief: Prezentace Pivního kvízu (Port 1560)

## 1. Kontext a účel

**Akce:** Festival piva – Pivní kvíz v areálu [Port 1560](https://www.port1560.cz/) (Pivnice v Pivovarské restauraci, Český Krumlov).

**Účel prezentace:** Podpora moderátora při živém kvízu pro týmy účastníků. Slidy slouží k čitelnému zobrazení otázek na projekci; odpovědi se odhalují až po dokončení celého kola (10 otázek), aby účastníci mohli současně vyplňovat odpovědníky.

**Zdroj obsahu:** `kviz.md` – 4 kola × 2 témata × 5 otázek + bonusová sekce EXTRA (2 otázky).

**Obrázky ke slidům:** složka `images/` – viz kap. 3.1.

**Jazyk:** výhradně čeština.

---

## 2. Cíle prezentace

| Cíl | Popis |
|-----|--------|
| Čitelnost | Otázky čitelné z dálky (hospoda / pivnice), velký kontrast textu a pozadí |
| Struktura | Jasné oddělení kol, témat a přechod na odpovědi |
| Spoiler-free | V průběhu kola žádné odpovědi na slidech s otázkami |
| Brand | Vizuální soulad s Port 1560 – kulturní centrum v areálu schwarzenberského pivovaru |
| Moderace | Jednoduchá navigace (další / předchozí slide), přehledné číslování otázek |

---

## 3. Struktura obsahu (mapování na slidy)

### Celkový rozsah

| Sekce | Počet otázek | Poznámka |
|-------|--------------|----------|
| Úvod | — | Titulní slide, pravidla |
| 1. kolo | 10 | Témata 1 + 2 |
| 2. kolo | 10 | Témata 3 + 4 |
| 3. kolo | 10 | Témata 5 + 6 |
| 4. kolo | 10 | Témata 7 + 8 |
| EXTRA | 2 | Volitelně po 4. kole nebo na závěr |
| **Celkem otázek** | **42** | |

### Detail kol a témat

**1. KOLO**
- **Téma 1 – Pivní základy** (5 otázek): legislativa, obilí, rmutování, kvašení, IBU
- **Téma 2 – Audioukázky** (5 otázek): reklama Braník, pohádka, Alkehol, ZZ Top, seriál Hospoda – *vyžaduje přehrání zvuku mimo prezentaci nebo vložené audio*

**2. KOLO**
- **Téma 3 – Pivní historie Krumlova** (5 otázek): mílové právo (*odpověď doplnit*), počet pivovarů, Jakub Krčín, městský pivovar (výběr a–d), pořadí šlechticů
- **Téma 4 – Pivovar Krumlov** (5 otázek): jubileum, sládek, ležáky, speciál Rogendorf, **degustační praktická část** (*obsah dle domluvy*)

**3. KOLO**
- **Téma 5 – Pivní rekordy, mýty a kuriozity** (5 otázek)
- **Téma 6 – Slavné pivní značky** (5 otázek): včetně přiřazovacích úloh a částečného bodování (Heineken portfolio)

**4. KOLO**
- **Téma 7 – Pivo v popkultuře** (5 otázek)
- **Téma 8 – Druhy piva** (5 otázek)

**EXTRA** (2 otázky): Oktoberfest, přiřazení značek ke kontinentům

### Průběh jednoho kola (šablona)

Pro každé kolo (1–4) platí stejný scénář:

1. **Slide: Přechod kola** – „1. KOLO“ + názvy obou témat
2. **Slide: Téma** – název tématu (např. „Téma 1 – Pivní základy“)
3. **Slidy: Otázky 1–5** – pouze znění otázky (+ případné možnosti a/b/c/d, obrázky u přiřazování)
4. **Slide: Téma 2** – druhé téma v kole
5. **Slidy: Otázky 6–10** – pokračování číslování v rámci kola (1–10) nebo restart 1–5 pod každým tématem – *doporučení: souvislé číslování 1–10 v kole*
6. **Slide: Konec kola – sběr odpovědí** – vizuální pauza („Čas na odevzdání / opravu odpovědí“)
7. **Slidy: Odpovědi** – přehled všech 10 otázek s řešeními (kompaktní layout nebo 2–3 slidy po 3–4 odpovědích)

### 3.1 Obrázky (`images/`)

Ilustrační a tematické obrázky ke slidům jsou uloženy ve složce **`images/`** v kořeni projektu. Každý slide s otázkou (případně přechod tématu / kola) načítá odpovídající soubor podle **konvence pojmenování: kolo – číslo otázky**.

#### Konvence názvu souboru

```
{KK}-{OO}[-{popis}].{pripona}
```

| Část | Význam | Příklad |
|------|--------|---------|
| `KK` | Číslo kola (2 číslice, s nulou na začátku) | `01` … `04` |
| `OO` | Číslo otázky **v rámci kola** 1–10 (s nulou na začátku) | `01` … `10` |
| `{popis}` | Volitelný anglický slug (kvůli přehledu v souborech) | `hops`, `barley`, `branik` |
| `{pripona}` | Formát souboru | `jpg`, `webp`, `jfif`, … |

**Příklady (aktuální podklady):**

| Soubor | Slide |
|--------|--------|
| `01-01-hops.jpg` | 1. kolo, otázka 1 |
| `01-05-IBU.jpg` | 1. kolo, otázka 5 |
| `02-00-audio.jpg` | 2. kolo – úvod k audioukázkám (otázka `00` = přechod / téma) |
| `02-06-branik.webp` | 2. kolo, otázka 6 |
| `03-00-historie.jpg` | 3. kolo – úvod k tématu historie |
| `04-00-krumlov.jpg` | 4. kolo – úvod k tématu Pivovar Krumlov |

#### Pravidla mapování

- **Otázky 1–5** prvního tématu v kole → `KK-01` … `KK-05`
- **Otázky 6–10** druhého tématu v kole → `KK-06` … `KK-10`
- **Přechodové / tematické slidy** (bez konkrétní otázky) → `KK-00-{popis}.*` (např. `02-00-audio.jpg`, `03-00-historie.jpg`)
- **EXTRA** (mimo kola 1–4) → doplnit dle dohody, např. `extra-01`, `extra-02` nebo `05-01`, `05-02` (zatím v `images/` chybí)

#### Použití v prezentaci

- Na slide **otázky** vložit obrázek z `images/` jako vizuální doplněk (pozadí, postranní panel nebo horní pás) – **bez spoileru** v odpovědi.
- Pokud soubor pro danou otázku **neexistuje**, slide zůstane pouze s textem a brand layoutem.
- Při tvorbě prezentace odkazovat relativní cestou: `images/01-01-hops.jpg`.

---

## 4. Vizuální identita (inspirace Port 1560)

Design vychází z [port1560.cz](https://www.port1560.cz/): kulturní centrum v historickém pivovarském areálu – propojení **dědictví, industriálu a současné kultury**.

### Atmosféra a tón

- Důstojný, ale přístupný – ne sportovní „pub quiz“ křiklavost
- Důraz na **místo** (Krumlov, Latrán, rok 1560, schwarzenberský pivovar)
- Narrativ: *„Krumlovské centrum piva / kultury“* – pivní kvíz jako součást festivalu, ne generická šablona

### Doporučené vizuální prvky

| Prvek | Směr |
|-------|------|
| **Barvy** | Tmavé pozadí (antracit, tmavě hnědá, „sladová“), světlý text (krémová / bílá); akcenty v odstínech mědi, zlaté, jantarové (chmel, pivo, industriál) |
| **Typografie** | Výrazný bezpatkový nadpis (moderní, jako web Port 1560); dobře čitelný patkový nebo humanistický text pro delší otázky |
| **Motivy** | Jemné industriální textury (cihla, kov, dřevo sladovny); symbol „1560“; případně písmena A–G odkazující na objekty areálu (Portál, Varna, Hvozd…) jako dekorativní prvky, ne jako obsah kvízu |
| **Fotografie / grafika** | Areál pivovaru, expozice, sudy, sklenice – pouze pokud máme práva; jinak abstraktní grafika |
| **Logo** | Port 1560 / Festival piva / Pivovar Krumlov – dle dodaných podkladů od pořadatele |

### Co se vyhnout

- Kýčovité clipart pivních lahví
- Příliš veselé „pijánské“ fonty a zelené neonové barvy
- Malý text, dlouhé odstavce bez zlomů
- Zobrazení odpovědí na slidech s otázkami

---

## 5. Typy slidů (sada šablon)

1. **Titulní** – Pivní kvíz, Port 1560, datum / místo
2. **Pravidla** – týmy, bodování, kola, audioukázky, degustace
3. **Přechod kola** – číslo kola + obě témata
4. **Hlavička tématu** – číslo tématu + název
5. **Otázka** – číslo (v rámci kola), text, obrázek z `images/{KK}-{OO}[-{popis}].*`, volitelně možnosti / tabulka pro přiřazení
6. **Speciální: Audio** – „Poslechněte si ukázku“ + ikona zvuku (bez odpovědi)
7. **Speciální: Degustace** – instrukce k praktické části (Téma 4, otázka 5)
8. **Pauza / sběr odpovědí** – mezi otázkami a odpověďmi kola
9. **Odpovědi kola** – přehled 10 řešení; u delších odpovědí stručná verze + doplnění ústně moderátorem
10. **EXTRA** – přechod + 2 otázky + odpovědi
11. **Závěrečný** – poděkování, odkazy (port1560.cz, pivovar)

---

## 6. Formát otázek na slidu

- **Otevřené otázky:** velký text otázky, bez nápovědy
- **Ano/Ne:** stejný layout, moderátor zopakuje možnosti
- **Výběr a–d:** možnosti pod sebou, dostatečný řádkový proklad
- **Přiřazení / řazení:** tabulka nebo dva sloupce (např. značky ↔ země)
- **Tip (nejbližší číslo):** zvýraznit pravidlo bodování na slide pravidel
- **Částečné body:** zmínit v pravidlech (např. Heineken portfolio – ½ bodu za dvě značky)

---

## 7. Technické a provozní požadavky

| Oblast | Požadavek |
|--------|-----------|
| **Formát** | Doporučeno 16:9 (Full HD), export PDF nebo PPTX pro projekci |
| **Obrázky** | Složka `images/`; konvence `{kolo}-{číslo-otázky}[-{popis}].{ext}` – kap. 3.1 |
| **Audio (Téma 2)** | Samostatné soubory nebo playlist; moderátor spouští ručně – slide pouze označí pořadí ukázky |
| **Degustace (Téma 4)** | Slide s instrukcemi; hodnocení mimo prezentaci (tabulka bodů u moderátora) |
| **Navigace** | Konzistentní pořadí slidů; žádné skryté odpovědi v poznámkách, které by mohly prosvítat |
| **Tisk** | Volitelně: stručný moderátorský skript (odpovědi + poznámky z `kviz.md`) – oddělený dokument, ne pro účastníky |

---

## 8. Otevřené body před realizací

Tyto položky je třeba doplnit nebo rozhodnout před finální tvorbou slidů:

1. **Téma 3, otázka 1** – definice „mílového práva“ (v `kviz.md` chybí odpověď)
2. **Téma 4, otázka 3** – upřesnit „tři ležáky“ vs. čtyři uvedené varianty (11°, 12°, 12° tmavá, nakuřovaná)
3. **Téma 4, otázka 5** – finální podoba degustační části a bodování
4. **Audiosoubory** – 5 ukázek pro Téma 2 (délka, licence, pořadí)
5. **Loga a grafické podklady** – oficiální assets Port 1560 / Pivovar Krumlov (pokud existují brand guidelines)
6. **Umístění EXTRA** – po 4. kole, nebo jen při remíze / jako rychlá přídavná otázka
7. **Číslování otázek** – globálně 1–42, nebo 1–10 v každém kole (doporučeno 1–10 v kole pro účastníky)

---

## 9. Odhad rozsahu slidů (orientační)

| Blok | Počet slidů (odhad) |
|------|---------------------|
| Úvod + pravidla | 2–3 |
| 4 × (přechod + 2× téma + 10 otázek + pauza + odpovědi) | cca 4 × 16 = **64** |
| EXTRA | 4–5 |
| Závěr | 1 |
| **Celkem** | **cca 72–75 slidů** |

*(Odpovědi lze sloučit na méně slidů při přehledném layoutu.)*

---

## 10. Další krok

Po schválení tohoto briefu:

1. Doplnit chybějící odpovědi a rozhodnout otevřené body (kap. 8)
2. Připravit vizuální šablonu (barvy, fonty, master slide)
3. Naplnit slidy obsahem z `kviz.md` dle struktury v kap. 3 a 5
4. Otestovat čitelnost na projektoru v místě konání (Pivovarská restaurace)

---

*Brief v 1.1 – doplněna konvence obrázků ve složce `images/`.*
