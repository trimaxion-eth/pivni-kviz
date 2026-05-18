import { META, RULES, IMAGES, ROUNDS, EXTRA } from "./quiz-data.js";
import {
  renderMatchColumnsHtml,
  renderMatchPairsHtml,
  renderOrderHtml,
} from "./slide-render.js";

function questionFields(q) {
  return {
    options: q.options,
    matchOptions: q.matchOptions,
    matchColumnTitles: q.matchColumnTitles,
    hint: q.hint,
    tasting: q.tasting,
  };
}

function answerFields(q) {
  return {
    answer: q.answer,
    matchPairs: q.matchPairs,
    orderItems: q.orderItems,
  };
}

function img(key) {
  return IMAGES[key] || null;
}

function escapeHtml(s) {
  const el = document.createElement("div");
  el.textContent = s;
  return el.innerHTML;
}

function buildSlides() {
  const slides = [];

  slides.push({
    type: "title",
    title: META.title,
    subtitle: META.subtitle,
    place: META.place,
  });

  slides.push({ type: "rules", items: RULES });

  for (const round of ROUNDS) {
    const themeTitles = round.themes.map((t) => `Téma ${t.num} – ${t.title}`);

    slides.push({
      type: "round",
      num: round.num,
      themes: themeTitles,
    });

    let qInRound = 0;

    for (const theme of round.themes) {
      slides.push({
        type: "theme",
        round: round.num,
        num: theme.num,
        title: theme.title,
        image: theme.imageKey ? img(theme.imageKey) : null,
        audio: theme.audio,
      });

      for (const question of theme.questions) {
        qInRound += 1;
        const imageKey = `${round.num}-${qInRound}`;
        const hideOnQuestion =
          round.num === 1 && qInRound >= 6;
        slides.push({
          type: "question",
          round: round.num,
          qNum: qInRound,
          text: question.text,
          image: hideOnQuestion ? null : img(imageKey),
          ...questionFields(question),
        });
      }
    }

    slides.push({ type: "collect", round: round.num });

    qInRound = 0;
    const answers = [];
    for (const theme of round.themes) {
      for (const question of theme.questions) {
        qInRound += 1;
        const imageKey = `${round.num}-${qInRound}`;
        const showOnAnswerOnly =
          round.num === 1 && qInRound >= 6;
        answers.push({
          num: qInRound,
          text: question.text,
          image: showOnAnswerOnly ? img(imageKey) : null,
          ...answerFields(question),
        });
      }
    }

    answers.forEach((item, i) => {
      slides.push({
        type: "answer",
        round: round.num,
        num: item.num,
        text: item.text,
        image: item.image,
        answer: item.answer,
        matchPairs: item.matchPairs,
        orderItems: item.orderItems,
        part: i + 1,
        parts: answers.length,
      });
    });
  }

  slides.push({ type: "extra-intro" });

  EXTRA.questions.forEach((q, i) => {
    slides.push({
      type: "question",
      round: "extra",
      qNum: i + 1,
      text: q.text,
      image: null,
      ...questionFields(q),
    });
  });

  EXTRA.questions.forEach((q, i) => {
    slides.push({
      type: "answer",
      round: "extra",
      num: i + 1,
      text: q.text,
      image: null,
      ...answerFields(q),
      part: i + 1,
      parts: EXTRA.questions.length,
    });
  });

  slides.push({
    type: "end",
    title: "Děkujeme za účast!",
    links: ["port1560.cz", "Pivovar Krumlov"],
  });

  return slides;
}

function renderSlide(slide) {
  const root = document.getElementById("slide-root");
  let html = "";

  switch (slide.type) {
    case "title":
      html = `
        <section class="slide slide--title">
          <p class="slide__eyebrow">Port ${META.year}</p>
          <h1 class="slide__hero">${escapeHtml(slide.title)}</h1>
          <p class="slide__subtitle">${escapeHtml(slide.subtitle)}</p>
          <p class="slide__place">${escapeHtml(slide.place)}</p>
        </section>`;
      break;

    case "rules":
      html = `
        <section class="slide slide--rules">
          <h2 class="slide__heading">Pravidla</h2>
          <ul class="slide__list">
            ${slide.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}
          </ul>
        </section>`;
      break;

    case "round":
      html = `
        <section class="slide slide--round">
          <p class="slide__eyebrow">Připravte se</p>
          <h2 class="slide__round-num">${slide.num}. kolo</h2>
          <ul class="slide__themes-preview">
            ${slide.themes.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
          </ul>
        </section>`;
      break;

    case "theme":
      html = `
        <section class="slide slide--theme${slide.image ? " slide--has-bg" : ""}">
          ${
            slide.image
              ? `<div class="slide__bg" style="background-image:url('${slide.image}')"></div>`
              : ""
          }
          <div class="slide__content">
            <p class="slide__eyebrow">${slide.round}. kolo</p>
            <h2 class="slide__heading">Téma ${slide.num}</h2>
            <p class="slide__theme-title">${escapeHtml(slide.title)}</p>
            ${slide.audio ? '<p class="slide__badge">Audioukázky</p>' : ""}
          </div>
        </section>`;
      break;

    case "question": {
      const label =
        slide.round === "extra"
          ? `Extra · otázka ${slide.qNum}`
          : `${slide.round}. kolo · otázka ${slide.qNum}`;
      let optionsBlock = "";
      if (slide.matchOptions && slide.options) {
        optionsBlock = renderMatchColumnsHtml(
          slide.options,
          escapeHtml,
          slide.matchColumnTitles
        );
      } else if (slide.options) {
        optionsBlock = `<ul class="slide__options">${slide.options
          .map((o) => `<li>${escapeHtml(o)}</li>`)
          .join("")}</ul>`;
      }
      html = `
        <section class="slide slide--question${slide.image ? " slide--split" : ""}${slide.matchOptions ? " slide--question-match" : ""}">
          <div class="slide__question-body">
            <p class="slide__eyebrow">${escapeHtml(label)}</p>
            <p class="slide__q-number">${slide.qNum}</p>
            <h2 class="slide__question-text">${escapeHtml(slide.text)}</h2>
            ${optionsBlock}
            ${slide.hint ? `<p class="slide__hint">${escapeHtml(slide.hint)}</p>` : ""}
            ${slide.tasting ? '<p class="slide__badge">Degustace</p>' : ""}
          </div>
          ${
            slide.image
              ? `<div class="slide__media"><img src="${slide.image}" alt="" /></div>`
              : ""
          }
        </section>`;
      break;
    }

    case "collect":
      html = `
        <section class="slide slide--collect">
          <p class="slide__eyebrow">${slide.round}. kolo</p>
          <h2 class="slide__heading">Konec kola</h2>
          <p class="slide__collect-msg">Čas na odevzdání a opravu odpovědí</p>
        </section>`;
      break;

    case "answer": {
      const roundLabel =
        slide.round === "extra"
          ? `Extra – odpověď ${slide.part}/${slide.parts}`
          : `${slide.round}. kolo – odpověď ${slide.part}/${slide.parts}`;
      const hasStructured =
        slide.matchPairs?.length || slide.orderItems?.length;
      let answerBlock = "";
      if (slide.matchPairs?.length) {
        answerBlock = renderMatchPairsHtml(slide.matchPairs, escapeHtml);
      } else if (slide.orderItems?.length) {
        answerBlock = renderOrderHtml(slide.orderItems, escapeHtml);
      } else {
        answerBlock = `<p class="slide__ans-a slide__ans-a--hero">${escapeHtml(slide.answer ?? "")}</p>`;
      }
      html = `
        <section class="slide slide--answer${slide.image ? " slide--split" : ""}${hasStructured ? " slide--answer-structured" : ""}">
          <div class="slide__answer-body">
            <p class="slide__eyebrow">${escapeHtml(roundLabel)}</p>
            <p class="slide__q-number">${slide.num}</p>
            <p class="slide__ans-q">${escapeHtml(slide.text)}</p>
            ${answerBlock}
          </div>
          ${
            slide.image
              ? `<div class="slide__media"><img src="${slide.image}" alt="" /></div>`
              : ""
          }
        </section>`;
      break;
    }

    case "extra-intro":
      html = `
        <section class="slide slide--round slide--extra">
          <p class="slide__eyebrow">Bonus</p>
          <h2 class="slide__round-num">Extra</h2>
          <p class="slide__theme-title">2 bonusové otázky</p>
        </section>`;
      break;

    case "end":
      html = `
        <section class="slide slide--title slide--end">
          <h1 class="slide__hero">${escapeHtml(slide.title)}</h1>
          <p class="slide__subtitle">${slide.links.map(escapeHtml).join(" · ")}</p>
          <p class="slide__place">port1560.cz</p>
        </section>`;
      break;

    default:
      html = `<section class="slide"><p>Neznámý slide</p></section>`;
  }

  root.innerHTML = html;
}

function updateUI(index, total) {
  const jump = document.getElementById("slide-jump");
  jump.value = index + 1;
  jump.min = 1;
  jump.max = total;
  document.getElementById("slide-total").textContent = ` / ${total}`;
  document.getElementById("btn-prev").disabled = index === 0;
  document.getElementById("btn-next").disabled = index === total - 1;
}

function init() {
  const slides = buildSlides();
  let index = 0;

  function show(i) {
    index = Math.max(0, Math.min(i, slides.length - 1));
    renderSlide(slides[index]);
    updateUI(index, slides.length);
  }

  document.getElementById("btn-prev").addEventListener("click", () => show(index - 1));
  document.getElementById("btn-next").addEventListener("click", () => show(index + 1));

  const slideJump = document.getElementById("slide-jump");

  function commitSlideJump() {
    const n = parseInt(slideJump.value, 10);
    if (!Number.isFinite(n)) {
      slideJump.value = index + 1;
      return;
    }
    show(n - 1);
  }

  slideJump.addEventListener("focus", () => slideJump.select());
  slideJump.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commitSlideJump();
      slideJump.blur();
    }
  });
  slideJump.addEventListener("change", commitSlideJump);
  slideJump.addEventListener("blur", () => {
    if (!Number.isFinite(parseInt(slideJump.value, 10))) {
      slideJump.value = index + 1;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.target === slideJump) return;

    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      show(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      show(index - 1);
    } else if (e.key === "Home") {
      show(0);
    } else if (e.key === "End") {
      show(slides.length - 1);
    } else if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  });

  show(0);
}

init();
