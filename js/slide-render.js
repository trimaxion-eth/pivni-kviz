/** Helpers for matching / ordering question & answer slides */

export function stripOptionLabel(s) {
  return s
    .replace(/^\d+\.\s*/, "")
    .replace(/^[a-dA-D]\)\s*/, "")
    .replace(/^[A-D]\.\s*/, "")
    .trim();
}

/** Split options into numbered (left) and lettered (right) columns */
export function splitMatchOptions(options) {
  const left = [];
  const right = [];
  for (const raw of options) {
    const line = raw.trim();
    const num = line.match(/^(\d+)\./);
    const letter = line.match(/^([a-dA-D])[\).]/);
    if (num) {
      left.push({ label: num[1], text: stripOptionLabel(line) });
    } else if (letter) {
      right.push({
        label: letter[1].toUpperCase(),
        text: stripOptionLabel(line),
      });
    }
  }
  return { left, right };
}

export function isMatchOptions(options) {
  if (!options?.length) return false;
  const { left, right } = splitMatchOptions(options);
  return left.length > 0 && right.length > 0;
}

export function renderMatchColumnsHtml(
  options,
  escapeHtml,
  titles = { left: "Značky", right: "Země / region" }
) {
  const { left, right } = splitMatchOptions(options);
  return `
    <div class="slide__match-columns">
      <div class="slide__match-col">
        <h3 class="slide__match-col-title">${escapeHtml(titles.left)}</h3>
        <ul class="slide__match-col-list">
          ${left.map((i) => `<li><span class="slide__match-label">${i.label}.</span> ${escapeHtml(i.text)}</li>`).join("")}
        </ul>
      </div>
      <div class="slide__match-col">
        <h3 class="slide__match-col-title">${escapeHtml(titles.right)}</h3>
        <ul class="slide__match-col-list">
          ${right.map((i) => `<li><span class="slide__match-label">${i.label})</span> ${escapeHtml(i.text)}</li>`).join("")}
        </ul>
      </div>
    </div>`;
}

export function renderMatchPairsHtml(pairs, escapeHtml) {
  return `
    <div class="slide__match-list" role="list">
      ${pairs
        .map(
          (p) => `
        <div class="slide__match-row" role="listitem">
          <span class="slide__match-left">${escapeHtml(p.left)}</span>
          <span class="slide__match-arrow" aria-hidden="true">→</span>
          <span class="slide__match-right">${escapeHtml(p.right)}</span>
        </div>`
        )
        .join("")}
    </div>`;
}

export function renderOrderHtml(items, escapeHtml) {
  return `
    <ol class="slide__order-list">
      ${items
        .map(
          (name, i) => `
        <li class="slide__order-item">
          <span class="slide__order-rank">${i + 1}</span>
          <span class="slide__order-name">${escapeHtml(name)}</span>
        </li>`
        )
        .join("")}
    </ol>`;
}
